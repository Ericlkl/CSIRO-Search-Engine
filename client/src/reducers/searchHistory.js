import {ADD_SEARCH_HISTORY, RESET_SEARCH_HISTORY} from '../actions/types'
import {bake_cookie, read_cookie} from 'sfcookies'

export default (state = [], action) => {
    state = read_cookie("searchHistory");
    
    switch(action.type){
        case ADD_SEARCH_HISTORY:
            if (action.payload === "" || state.includes(action.payload)) {
                return state
            } 
            bake_cookie("searchHistory", [...state, action.payload]);
            return [...state, action.payload]

        case RESET_SEARCH_HISTORY:
            bake_cookie("searchHistory", []);
            return [];
        default:
            return state;
    }
}