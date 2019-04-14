var elasticsearch = require('elasticsearch');
var esclient = new elasticsearch.Client({ host: 'localhost:9200' });
const bodybuilder = require('bodybuilder');


var tags = 'tags';
var tag = 'tags.tag'; //couldn't figure out how to get . working for nested object
var searchString = 'disease';
var singleFilter = ['medication','hyperlipidemia','hypertension','cad','family_hist','diabetes'];//this ia a specific field filter you can get a lits of these using
//You can get a list of these using:

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
                  {terms:{['tags.time']:['before', 'after']}},
                  {terms:{['tags.indicator']:['mention','test','event','not present']}},
                  {terms:{[tag]: singleFilter }}   //tag had to be used because it complained about "unexpect token ."
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
    console.log("Elastic Search Result");
    console.log(esResult.hits);
  })