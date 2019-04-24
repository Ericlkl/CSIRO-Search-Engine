import filterReducer from './filterReducer';
import keywordReducer from './keywordReducer'
import searchHistoryReducer from './searchHistoryReducer';
import resultReducer from './resultReducer';
import suggestionReducer from './suggestionReducer';
import helpSectionReducer from './helpSectionReducer';
import themeReducer from './themeReducer'
import { combineReducers } from 'redux';
import filterValuesReducer from './filterValuesReducer';

// All variable in the redux store
export default combineReducers({
    keyword: keywordReducer,
    filter: filterReducer,
    filterValues: filterValuesReducer,
    searchResult: resultReducer,
    searchHistory: searchHistoryReducer,
    suggestBox: suggestionReducer,
    help: helpSectionReducer,
    theme: themeReducer
})