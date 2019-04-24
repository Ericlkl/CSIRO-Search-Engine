import {nodeServer} from '../api/index';
import { FETCH_RESULTS } from './types';

export const fetchResults = () => async (dispatch, getState) => {
    // Get filter and keyword data from redux store
    const {filter, keyword} = getState();
    // Send Keyword and filter data to nodeServer
    const res = await nodeServer.post(`/api/data`, { 
        keyword,
        filter
    })
    // Put the data to result
    dispatch({
        type: FETCH_RESULTS,
        payload: res.data
    });
}