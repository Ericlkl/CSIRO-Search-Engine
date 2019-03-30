import axios from 'axios';

export const nodeServer = axios.create({
    baseURL: 'http://localhost:3001'
})

export const ESserver = axios.create({
    baseURL: 'http://localhost:9200'
});

export const bioontologyServer = axios.create({
    baseURL: 'http://data.bioontology.org'
});
