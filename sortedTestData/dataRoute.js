const {PythonShell} = require('python-shell')
const options = {
  mode: 'text',
  encoding: `utf8`,
  scriptPath: './',
  pythonOptions: ['-u'],
  pythonPath: `/usr/local/bin/python3`
};

module.exports = (app) => {
  app.get('/data',(req,res) => {
    PythonShell.run('indexXML.py', options, (err, results) => {
      if (err) throw err;
      console.log("Python Script Run!");
      console.log('results: %j', results);
      // results is an array consisting of messages collected during execution
      // res.status(200).send({ msg : "Run Python Script Successfully"});
    }); 
  })
}
