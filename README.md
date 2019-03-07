# Csiro_Search

## Key Technology Include
```
ReactJS
Redux
Sass
```

## Client Side Package Include
```
  react
  react-dom
  react-redux
  react-router
  react-router-dom
  react-scripts
  redux
  node-sass
  axios
  react-redux
  redux-thunk
```

## Getting Started (Front-end Website)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
1. Install NodeJS on your computer
2. Open Terminal/ Bash on your computer
3. Change directory to the client folder
4. type ' npm install '
5. When install package is finished, type 'npm run start'
6. Open your web browser and insert url (http://localhost:3000/)
```

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
npm package manager
Web browser
```

## Deployment

Currently the project is deployed on ... 

```
URI : https://
```

## Backend usage

### Running Elasticsearch

Currently this project runs a portable copy of elasticsearch
There are a few ways of launching the ES server at the moment

From the project root directory in terminal

```
./elasticSearch/bin/elasticsearch
```
Will run and lock the current console to ES, exiting the terminal or sending an interrupt signal will close ES.

ES can be run as a Daemon, doing this will allow further use of the current terminal. 
And closing the console will have no effect on the ES server.
```
./elasticSearch/bin/elasticsearch -d
```

The final way of running ES is using our startup script.
This script will notify terminal when ES is ready to recieve requests, and will cleanly shutdown the server when the user presses enter in the terminal.

```
./startBackend.sh
```
### Running Kibana
Kibana is a dev tool used for managing and viewing ES indexes and data.

The ES server needs to be running before you can use Kibana, but kibana will launch without ES and wait for the server.

To run from project root use:
```
./kibana/bin/kibana
```

### XML Parser
The XML dataset we are using requires a parser for indexing files correctly into ES.
Currently the parser needs to be run from it's working directory.

From project root:
```
cd sortedTestData
python indexXML.py
```
Be sure ES is running for parsing to work.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **John Santias** - *Project Manager / Scrum Master* - [AsianJohnBoi](https://github.com/AsianJohnBoi)
* **lan Williams** - *Team Leader* - [IanWil](https://github.com/IanWil)
* **Aaron Tolmaci** - *Back End Developer* - [aaron-tolmaci](https://github.com/aaron-tolmaci)
* **Eric lee** - *Front End Developer* - [Ericlkl](https://github.com/Ericlkl)
* **Emma Lu** - *Front End Developer* - [Emmalululu](https://github.com/Emmalululu)
