import {nodeServer} from '../api/index';
import { FETCH_RESULTS, ADD_SEARCH_HISTORY } from './types';

// Fetch Result Method would only search the data by keyword
// It is not include the filter informations
export const fetchResults = () => async (dispatch, getState) => {
    // Get filter and keyword data from redux store
    const {keyword} = getState();
    // Send Keyword only to search the data
    const res = await nodeServer.post(`/api/data`, { keyword })
    // Put the data to result
    dispatch({ type: FETCH_RESULTS, payload: res.data});
    // Insert the keyword to search history box
    dispatch({ type: ADD_SEARCH_HISTORY, payload: keyword.trim() });
}