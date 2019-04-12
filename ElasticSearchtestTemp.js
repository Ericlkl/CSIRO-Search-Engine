var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const _ = require('lodash');

var searchString = 'disease';
var singleFilter = 'medication';//this ia a specific field filter you can get a lits of these using
//You can get a list of these using:


var tags = 'tags';
var tag = 'tags.tag'; //couldn't figure out how to get . working for nested object
var indicator = 'tags.indicator'; //Im not sure how to use . in the string literals
var keyword = 'tags.tag.keyword';

//This is to get filter objects back how you extract them and use them is up to you
let filterOptions = esclient.search(
{
  index: 'main',
  body:{
    size:0,
    aggs:{
      objects:{
        nested:{path:[tags]},
        aggs:{
          filters:{
            filter:{
              bool:{
                must:
                [
                  {exists:{field:[indicator]}}
                ]
              }
            },
            aggs:{
              results:{
                terms:{
                  field:[keyword]
                }
              }
            }
          }
        }
      }
    }
  }
}
)
.then(filterOptions =>{
  console.log(filterOptions);
})


/*
POST main/xml/_search
{
  "size": 0,
  "aggs": {
    "objects": {
      "nested": {
        "path": "tags"
      },
      "aggs": {
        "filteredObjects":{
          "filter": {
            "bool": {
              "must":[
                {"exists":{"field":"tags.indicator"}}
                ]
            }
          },
          "aggs": {
            "results": {
              "terms": {
                "field": "tags.tag.keyword"
              }
            }  
          }
        }
      }
    }
  }
}
*/

// Implement your elastic Search Query Here
let searchResult = esclient.search(
{
  index: 'main',
  body:{
    query: {
      bool: {
        must:
        [
          //This is the basic search term we are using
          //Later this will need to be swapped out on the fly if we choose to be serching CT terms or by text
          {terms:{text:[searchString]}},
          {
            nested:{
              //This is the containing array for all objects we have in each document.
              path:[tags], //couldn't get just tags to work so had to use variable.
              query:
              [
                //multiple filters can be inserted here comma seperate each line eg;
                //{terms:{[tag]:[anotherFilter]}},
                //{terms:{[tag]:[singleFilter]}} 
                {terms:{[tag]:[singleFilter]}}   //tag had to be used because it complained about "unexpect token ."
              ]
            }
          }
        ]
      }
    }
  }
})
.then(esResult => {
  // The Result will come back here saved in esResult Variable

  console.log(esResult);
})
  

//This is the equivilent query.
/*
POST main/xml/_search?size=5
{
  "query": {
    "bool":{
      "must":
      [
        {"term":{"text":"disease"}},
        {
          "nested":{
            "path":"tags",
            "query":[
                {"term":{"tags.tag": "medication"}}
              ]
          }
        }
      ]
    }
  }
}
*/