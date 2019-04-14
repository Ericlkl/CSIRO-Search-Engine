const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

module.exports = app => {
    // This Route ables The front end side fetch the data from ES
    app.post('/data/', async (req,res) => {
        // Elastic Search Query Setup
        // the Result is saved in this variable 
        const {filter, keyword} = req.body;
        console.log(filter);
        console.log(filter.time.map(time => _.lowerCase( _.replace(time," DCT",""))));


        const ESresult = await esclient.search(  {
          index: 'main',
          body:{
            query: {
              bool: {
                must:
                [
                  //This is the basic search term we are using
                  //Later this will need to be swapped out on the fly if we choose to be serching CT terms or by text
                  {terms:{text: [keyword] }},
                  {
                    nested:{
                      //This is the containing array for all objects we have in each document.
                      path: 'tags', //couldn't get just tags to work so had to use variable.
                      query:
                      [
                        //multiple filters can be inserted here comma seperate each line eg;
                        {
                          terms:{["tags.time"]: filter.time.map(time => _.lowerCase( _.replace(time," DCT","")))},
                          terms:{["tags.indicator"]: filter.indicator.map(indicator => _.lowerCase(indicator))},
                          terms:{["tags.tag"]: filter.tag.map(tag => _.lowerCase(tag))}
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        })
        
        const result = {
            results: ESresult.hits.hits.map( hit => {
                // Loop through the hits object
                // First Split the text and put every text into array
                // Second Filter out the "" by length === 0
                const informations = _.split(hit._source.text,/\\[a-z]+/)
                    .filter(word => word.length > 0 );
                                
                return {
                    fileName: hit._id,
                    tags: hit._source.tags,
                    informations
                }
            }),
            total: ESresult.hits.total
        };

        // Return the formatted result to the front end side
        res.status(200).send(result);
    });

    // Return XML Data to the XML Page
    app.get('/xml/:id', async (req,res) => {
      let esResult = await esclient.search({
        index: 'main',
        body: {
          query: {
              match: { 
                  _id: `${req.params.id}.xml`
              }
          }
        }
      })
      const { _id, _source } = esResult.hits.hits[0];
      const result = {
        fileName: _id,
        tags: _source.tags,
        informations: _.split(_source.text,/\\[a-z]+/).filter(word => word.length > 0 )
      };
      res.status(200).send(result)
    })

    // Template For Filter, If it is useless feel free to delete
    app.post('/data/filter', async (req,res) => {
        const {keyword} = req.body;

        // Elastic Search Query Set Up
        const ESresult = await esclient.search({
            index: 'main',
            body: {
              query: {
                  match: { 
                    text: keyword
                  }
              },   
              aggs: {
                top_10_states: {
                  terms: {
                      field: 'state',
                      size: 10
                  }
                }
              }
            }   // End of the body
        })

        // Send something back to the front end
        // res.status(200).send();
    })
}
