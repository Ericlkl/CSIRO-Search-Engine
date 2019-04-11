import {nodeServer} from '../api/index';
import _ from 'lodash';

import { FETCH_RESULTS } from './types';

export const fetchResults = keyword => async dispatch => {
    const queryData = await nodeServer.post('/data', {keyword} );
    // Result Array contains all the result object
    const payload = {
        results: queryData.data.hits.hits.map( hit => {
            // Loop through the hits object
            // First Split the text and put every text into array
            // Second Filter out the "" by length === 0
            const informations = _.split(hit._source.text,/\\[a-z]+/)
                            .filter(word => word.length > 0 );
                            
            return {
                fileName: hit._id,
                tags: hit._source.tags,
                informations
            }
        }),
        total: queryData.data.hits.total
    };

        
    dispatch({
        type: FETCH_RESULTS,
        payload
    });
}