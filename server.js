const path = require('path');
const express = require('express');
const {PythonShell} = require('python-shell')
const cors = require('cors');
const app = express();

const options = {
    mode: 'text',
    encoding: `utf8`,
    scriptPath: './sortedTestData/',
    pythonOptions: ['-u'],
    pythonPath: `/usr/local/bin/python3`
};

app.use(express.static('client/build'));
app.use(cors());

app.get('/data/update', (req, res) => {
    console.log("Python Script: NewIndexXML.py is running...");

    PythonShell.run('NewIndexXML.py', options, (err, results) => {
        if (err) {
            res.status(401).send({msg: "Server Error!"});
            throw err;
        } 
        console.log("Python Script Excuted Successfully!");
        console.log('results: %j', results);
        res.status(200).send({msg: "Success!"})
    }); 
})

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))     
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));