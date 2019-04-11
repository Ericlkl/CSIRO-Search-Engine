const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

module.exports = app => {
    // This Route ables The front end side fetch the data from ES
    app.post('/data', async (req,res) => {
        // Read the keyword from the front end side request
        // This is exact the value that user insert from searchbar
        const {keyword} = req.body;

        // Elastic Search Query Setup
        // the Result is saved in this variable 
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
