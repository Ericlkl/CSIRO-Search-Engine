var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });

module.exports = app => {

    app.post('/data',  (req,res) => {
        const {keyword} = req.body;
        console.log(keyword)

        esclient.search({
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
        .then(function (response) {
              var hits = response.hits.hits;
              res.send(response);
        });
    })
}
