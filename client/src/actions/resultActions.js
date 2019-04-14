import {nodeServer} from '../api/index';
import { FETCH_RESULTS } from './types';

export const fetchResults = keyword => async (dispatch, getState) => {
    const {filter, searchKey} = getState();
    console.log(filter);
    console.log(searchKey);
    const res = await nodeServer.post(`/data/`,{ keyword: searchKey });
    dispatch({
        type: FETCH_RESULTS,
        payload: res.data
    });
}