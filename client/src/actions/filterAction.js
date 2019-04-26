import { FETCH_FILTER_VALUES, FILTER_SELECTED, FILTER_RESET, FETCH_RESULTS } from './types'
import { nodeServer } from '../api/index'
import _ from 'lodash';

const filterSelectorInit = filterValues => {
    const filterSelector = _.cloneDeep(filterValues);

    for(const tag in filterSelector) {
        for(const option in filterSelector[tag])
            filterSelector[tag][option] = []
    }
    return filterSelector
}

// payload is an array in format ["mainTagName", "subTagName", "value"]
export const filterSelect = payload => async (dispatch, getState) => {
    // Update filter value in the redux store first
    dispatch({ 
        type: FILTER_SELECTED, 
        payload 
    })
    // Fetch the data again from the nodeJs Server
    // Get filter and keyword data from redux store
    const {filter, keyword} = getState();
    // Send Keyword only to search the data
    const res = await nodeServer.post(`/api/data`, { keyword, filter })
    // Put the data to result
    dispatch({ type: FETCH_RESULTS, payload: res.data});
}

export const filterReset = () => (dispatch, getState) => {
    // Get filterValues from redux store state
    const { filterValues } = getState();

    // Create Empty array for all the tag 
    const filterSelector = filterSelectorInit(filterValues);

    // Return a object that contains all the tag name as property name
    // Which contains an empty array for filter use
    dispatch({ payload: filterSelector, type: FILTER_RESET });
}

export const fetchFilterValues = () => async (dispatch, getState) => {
    const { keyword } = getState();
    const res = await nodeServer.post('/api/filter', { keyword })
    const filterValues = res.data;

    dispatch({ type: FETCH_FILTER_VALUES, payload: filterValues })

    // Create Empty array for all the tag 
    const filterSelector = filterSelectorInit(filterValues);

    // Return a object that contains all the tag name as property name
    // Which contains an empty array for filter use
    dispatch({ payload: filterSelector, type: FILTER_RESET });
}