import {nodeServer} from '../api/index';
import { FETCH_RESULTS } from './types';

export const fetchResults = keyword => async dispatch => {
    const res = await nodeServer.post('/data', {keyword} );
    dispatch({
        type: FETCH_RESULTS,
        payload: res.data
    });
}