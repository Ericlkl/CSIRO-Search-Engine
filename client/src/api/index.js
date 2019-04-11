import axios from 'axios';

export const nodeServer = axios.create({
    baseURL: 'http://localhost:3001'
})

export const bioontologyServer = axios.create({
    baseURL: 'http://data.bioontology.org'
});
