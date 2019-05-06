const path = require('path');
const express = require('express');
const {PythonShell} = require('python-shell')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const options = {
    mode: 'text',
    encoding: `utf8`,
    scriptPath: './sortedTestData/',
    pythonOptions: ['-u'],
    pythonPath: `python3`
};

app.use(express.static('client/build'));
app.use(cors());
app.use(bodyParser.json());

// app.post('*', (req, res, next) => {
//     console.log("Python Script: NewIndexXML.py is running...");

//     PythonShell.run('NewIndexXML.py', options, (err, results) => {
//         if (err) {
//             res.status(401).send({msg: "Server Error!"});
//             throw err;
//         } 
//         console.log("Python Script Excuted Successfully!");
//         console.log('results: %j', results);
//         next()
//     }); 
// })

// ElasticSearch Data route which return data back according to the medical terms
require('./routes/data')(app);
// ElasticSearch filter route which return filters options and values
require('./routes/filter')(app);
// ElasticSearch xml route which return the xml file data to show it on xml page
require('./routes/xml')(app);

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))     
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));