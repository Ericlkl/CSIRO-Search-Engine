var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

module.exports = app => {

    app.post('/data', async (req,res) => {
        const {keyword} = req.body;
        console.log(keyword)

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
        res.status(200).send(result);
    })
}
