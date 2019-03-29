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
3. Change directory to the root folder of this project 'CSIRO-Search-Engine-Project/'
4. type ' npm run build '
5. When install package is finished, type 'npm run dev'
6. Open your web browser and insert url (http://localhost:3000/)

```


## Server Side Production Build (Ubuntu)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
1. ssh to the server
2. sudo su 
3. Change directory to the root folder of this project CSIRO-Search-Engine-Project/
4. run 'nvm use v11.11.0'
5. run 'npm -v' to check npm is higher than version 6.0.0
6. run 'npm install'
7. run 'npm run build'
8. run 'npm run start' start the server
9. Open your web browser and insert url (http://localhost:3001/) or domin name:port
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

### Dependencies

```
pyCurl
Elasticsearch
```
Optional dev tool
```
Kibana
```

### Elasticsearch

GNU/Linux using systemctl
```
sudo systemctl start elasticsearch.service
```
will run elasticsearch until system reboot

Check if running by going to:
```
localhost:9200
```

### Kibana

GNU/Linux using systemctl
```
sudo systemctl start kibana.service
```
will run kibana until system reboot

Use by going to:
```
localhost:5601
```

First time usage will need an index pattern to be mapped
```
1. Go to management
2. Click on index patterns
3. If there are no patterns listed under "Create index pattern" click on the button
4. Enter index pattern "main" and click next step
!. If no matching indexes are found the data needs to be parsed first!
5. Click "Create index pattern"
```

Data can be viewed in Discover tab.

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
