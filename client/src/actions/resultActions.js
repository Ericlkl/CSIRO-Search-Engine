import axios from 'axios';
import _ from 'lodash';

import { FETCH_RESULTS } from './types';

export const fetchResults = keyword => async dispatch => {
    const updateRes = await axios.get('http://localhost:3001/data');
    const res = await axios.get('/main/xml/_search?q='+ keyword);

    // Result Array contains all the result object
    const payload = {
        results: [],
        total: res.data.hits.total
    };

    // Loop through the hits object
    res.data.hits.hits.forEach( hit => {
        // First Split the text and put every text into array
        // Second Filter out the "" by length === 0
        const informations = _.split(hit._source.text,/\\[a-z]+/)
                        .filter(word => word.length > 0 );
                        
        payload.results.push({
            fileName: hit._id,
            tags: hit._source.tags,
            informations
        });
    })
    
    dispatch({
        type: FETCH_RESULTS,
        payload
    });
}