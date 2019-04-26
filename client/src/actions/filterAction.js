import { FETCH_FILTER_VALUES, FILTER_SELECTED, FILTER_RESET } from './types'
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

export const filterSelect = payload => ({ type: FILTER_SELECTED, payload })

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



    console.log("Selector : the thing we want : ")
    console.log(filterSelector)
    console.log("filterValues : The thing we original have")
    console.log(filterValues)

    // Return a object that contains all the tag name as property name
    // Which contains an empty array for filter use
    dispatch({ payload: filterSelector, type: FILTER_RESET });
}