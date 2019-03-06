import {ADD_SEARCH_HISTORY, RESET_SEARCH_HISTORY, GET_SEARCH_HISTORY_COOKIES} from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case ADD_SEARCH_HISTORY:
            if (action.payload === "" || state.includes(action.payload)) {
                return state
            } 
            return [...state, action.payload]

        case GET_SEARCH_HISTORY_COOKIES:
            return action.payload;
            
        case RESET_SEARCH_HISTORY:
            return [];
        default:
            return state;
    }
}