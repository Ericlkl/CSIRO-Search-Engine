import { UPDATE_SEARCH_KEYWORDS } from '../actions/types';
import filterReducer from './filterReducer';
import searchHistoryReducer from './searchHistoryReducer';
import resultReducer from './resultReducer';
import { combineReducers } from 'redux';

const searchKeyReducer = (state = "", action) => {
    switch(action.type){
        case UPDATE_SEARCH_KEYWORDS:
            return action.payload;
        default:
            return state
    }
}

export default combineReducers({
    searchKey: searchKeyReducer,
    filter: filterReducer,
    result: resultReducer,
    searchHistory: searchHistoryReducer
})