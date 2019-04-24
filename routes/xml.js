const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

module.exports = app => {

    // Return XML Data to the XML Page
    app.get('/api/xml/:id', async (req,res) => {
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

}
