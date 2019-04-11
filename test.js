var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });

let test = async () => {
    let searchResult = await esclient.search({
        index: 'main',
        body: {
          query: {
              match: { 
                  text: ""
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
    }});
    
    var hits = searchResult.hits.hits;
    return (hits);
    
}

await test();