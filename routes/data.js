const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");

const keywordQuery = keyword => ({
  index: 'main',
  body:{
    query: {
      bool:{
        must: [ { terms: { text:[keyword] } } ] // End Should
      }
    }
  }
})

module.exports = app => {
    // This Route ables The front end side fetch the data from ES
    app.post('/api/data', async (req,res) => {
        // Elastic Search Query Setup
        // the Result is saved in this variable 
        // console.log("\n\n\n");
        const {keyword, filter} = req.body;
        console.log("Filter Value is : ");
        console.log(filter);
        // console.log(filter);
        // const times = filter.time.map(time => ({ "match" : { "tags.time": time }}) )
        // const incas = filter.indicator.map(indicator => ({ "match" : { "tags.indicator": indicator.toLowerCase() }}))
        // const tags = filter.tag.map(tag => ({ "match" : { "tags.tag": tag.toUpperCase() }}))

        // console.log("\n\n");
        // console.log(times);
        // console.log(incas);
        // console.log(tags);

        const ESresult = await esclient.search( keywordQuery(keyword)  )  // End of ESresult
        
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

}
