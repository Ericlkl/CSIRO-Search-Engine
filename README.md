# Csiro_Search

## Key Technology Include
```
  ReactJS
  Redux
  ElasticSearch
  Styled-Components
  ExpressJS
```
### Prerequisites

What things you need to install the software and how to install them

```
  NodeJS
  NPM package manager
  Web Browser
  ElasticSearch
  Python
```

## Client Side Package Include
```
  "axios": "^0.18.0",
  "lodash": "^4.17.11",
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "react-html-parser": "^2.0.2",
  "react-redux": "^7.0.3",
  "react-router-dom": "^5.0.0",
  "react-scripts": "3.0.0",
  "redux": "^4.0.1",
  "redux-thunk": "^2.3.0",
  "sfcookies": "^1.0.2",
  "styled-components": "^4.2.0"
```

## Turn on Front-end Website (MacOS) *Fast & easy way 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
1. Open Terminal/ Bash on your computer
2. Change directory to the root folder of this project 'CSIRO-Search-Engine-Project/'
3. type ' npm run build '
4. When install package is finished, type 'npm run dev'
5. Open your web browser and insert url (http://localhost:3000/)

```

## Turn on Front-end Website (Windows 10) *Slow & stable way

**Important** You will need to keep the path as short as you can. otherwise, it might cause to some installation problem.

e.g. C:\Users\administrator\Documents\Workspace\CSIRO-Search-Engine-Project\client <- too long <br/>
e.g  C:\Users\CSIRO-Search-Engine-Project\client <- to this short

```
1. Open Node.js command prompt
2. Change directory to the client folder of this project 
3. npm install
4. npm run start
5. open a new tab and go the root folder of this project CSIRO-Search-Engine-Project\
6. npm install
7. npm run start

```


## How to install npm in Ubuntu
  You must install it as root user. otherwise you will get lots of permission problem when install the node_modules.installing npm via nvm, you will need to manually install npm anytime you turned off the terminal.

```
sudo su
apt-get update
apt-get curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
open new tab on terminal
sudo su
nvm install v11.11.0
nvm use v11.11.0
```

## Server Side Production Build (Ubuntu)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
1. ssh to the server
2. sudo su 
3. Change directory to the root folder of this project CSIRO-Search-Engine-Project/
4. If you have installed nvm on your machine, go forward. if no, please follow the instruction above
5. run 'nvm use v11.11.0'
6. run 'npm run build'
7. run 'npm run dev' start the server
8. Open your web browser and insert url (http://localhost:3001/) or domin name:port
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
Python >= 3.0
Elasticsearch >=6
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
python NewIndexXML.py
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
