const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");
const util = require('util');

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
                          "indicator": {
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
        
        const result = {};

        firstLayer.forEach(tag => {
          const filterOptions = {};
          // Get all the second layer tag to return their name as object key and document counts as values
          // E.g. { "Before DCT" }

          if (tag.type1.buckets.length !== 0) {
            filterOptions.type1 = {};
            tag.type1.buckets.forEach(value => filterOptions.type1[value.key] = value.doc_count );
          }

          if (tag.type2.buckets.length !== 0){ 
            filterOptions.type2 = {};
            tag.type2.buckets.forEach(value =>  filterOptions.type2[value.key] = value.doc_count  )
          }

          if (tag.indicator.buckets.length !== 0){ 
            filterOptions.indicator = {};
            tag.indicator.buckets.forEach(value => filterOptions.indicator[value.key] = value.doc_count)
          }

          if (Object.keys(filterOptions).length === 0) return;
          
          filterOptions.doc_count = tag.doc_count;
          result[tag.key] = filterOptions
        });

        // Send something back to the front end
        res.status(200).send(result);
    })

}
