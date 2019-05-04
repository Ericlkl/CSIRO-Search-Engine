const elasticsearch = require('elasticsearch');
const esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require("lodash");
const util = require('util');

module.exports = app => {
    // This Route ables The front end side fetch the data from ES
    app.post('/api/data', async (req,res) => {
        // Elastic Search Query Setup
        // the Result is saved in this variable 
        // console.log("\n\n\n");
        const {keyword, filter} = req.body;
        // console.log("Filter Value is : ");
        // console.log(filter);

        let ESQuery = {
          index: 'main',
          body:{
            query: {
              bool:{
                must: [ { term: { text: keyword } } ] // End Should
              }
            }
          }
        }  // End of ESresult

        if (filter !== undefined){
          // // Loop Through all the main tag name from the filter object
          for (const [mainTagName, subTagObj] of Object.entries(filter)) {
            let mainTagQuery = {
              "nested": {
                "path": "tags",
                "query": {
                  "bool": {
                    "must": [
                      { "match": {"tags.tag": mainTagName}},
                    ]
                  }
                }
              }
            };

            for (const [subTagName, subTagValues] of Object.entries(subTagObj)){
              subTagValues.forEach(value => {
                const temp = "tags."+ subTagName
                mainTagQuery.nested.query.bool.must.push({ "match": { [temp]: value }})
              })
            }

            if (mainTagQuery.nested.query.bool.must.length > 1)
              ESQuery.body.query.bool.must.push(mainTagQuery);
          } // End of main tag for loop
        
        } //End of the if has filter 

        // console.log(util.inspect(ESQuery, {showHidden: false, depth: null}))

        const ESresult = await esclient.search(ESQuery)  // End of ESresult
        
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

// POST main/xml/_search?size=5
// {
//   "query": {
//     "bool": {
//       "must": [
//         {
//           "nested": {
//             "path": "tags",
//             "query": {
//               "bool": {
//                 "must": [
//                   { "match_phrase": {"tags.time": "During DCT"}},
//                   { "match_phrase": {"tags.tag": "MEDICATION"}}
//                 ]
//               }
//             }
//           }
//         },
//         {
//           "nested": {
//             "path": "tags",
//             "query": {
//               "bool": {
//                 "must": [
//                   { "match_phrase": {"tags.time": "After DCT"}},
//                   { "match_phrase": {"tags.tag": "HYPERLIPIDEMIA"}},
//                   { "match_phrase": {"tags.indicator":"mention"}}
//                 ]
//               }
//             }
//           }
//         },
//         {
//           "nested": {
//             "path": "tags",
//             "query": {
//               "bool": {
//                 "must": [
//                   { "match_phrase": {"tags.time": "During DCT"}},
//                   { "match_phrase": {"tags.tag": "HYPERTENSION"}},
//                   { "match_phrase": {"tags.indicator":"mention"}}
//                 ]
//               }
//             }
//           }
//         }
//       ]
//     }
//   }
// }