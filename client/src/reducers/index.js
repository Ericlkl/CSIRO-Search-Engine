import filterReducer from './filterReducer';
import searchKeyReducer from './searchKeyReducer'
import searchHistoryReducer from './searchHistoryReducer';
import resultReducer from './resultReducer';
import { combineReducers } from 'redux';

// All variable in the redux store
export default combineReducers({
    searchKey: searchKeyReducer,
    filter: filterReducer,
    searchResult: resultReducer,
    searchHistory: searchHistoryReducer
})