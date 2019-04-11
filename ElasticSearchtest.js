var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require('lodash');

// Implement your elastic Search Query Here
let searchResult = esclient.search({
    index: 'main',
    body: {
      query: {
          match: { 
              _id: "189-04.xml"
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
}})
.then(esResult => {
  // The Result will come back here saved in esResult Variable

  console.log(esResult);
})
  
