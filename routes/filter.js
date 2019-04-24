const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

module.exports = app => {

    // Template For Filter, If it is useless feel free to delete
    app.post('/api/filter', async (req,res) => {
        const {keyword} = req.body;

        const esResult = await esclient.search(
            {
              index: 'main',
              body: {  
                "query": { 
                  "match": {
                  "text": keyword
                }
                }, 
                "aggs": {
                  "filterValues": {
                    "nested": {
                      "path": "tags"
                    },
                    "aggs": {
                      "Tag": {
                        "terms": {
                          "field": "tags.tag.keyword"
                        },
                        "aggs": {
                          "indicators": {
                            "terms": {
                              "field": "tags.indicator.keyword",
                              "size":500
                            }
                          },
                          "time": {
                            "terms": {
                              "field": "tags.time.keyword",
                              "size":500
                            }
                          },
                          "type1": {
                            "terms": {
                              "field": "tags.type1.keyword",
                              "size":500
                            }
                          },
                           "type2": {
                            "terms": {
                              "field": "tags.typ2.keyword",
                              "size":500
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
          })

        // First Layer of the filter, it contains the tags name
        const firstLayer = esResult.aggregations.filterValues.Tag.buckets;
        
        const result = firstLayer.map(tag => ({
            tagName: tag.key,
            filterOptions:{
              time:  tag.time.buckets.map(obj => obj.key),
              type1: tag.type1.buckets.map(obj => obj.key),
              type2: tag.type2.buckets.map(obj => obj.key),
              indicators: tag.indicators.buckets.map(obj => obj.key)
            }
        }));

        // Send something back to the front end
        res.status(200).send(result);
    })

}
