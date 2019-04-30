import filterReducer from './filter';
import keywordReducer from './keyword'
import searchHistoryReducer from './searchHistory';
import resultReducer from './result';
import suggestionReducer from './suggestion';
import helpSectionReducer from './help';
import themeReducer from './theme'
import { combineReducers } from 'redux';
import filterValuesReducer from './filterValues';

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