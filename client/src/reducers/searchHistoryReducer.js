import {ADD_SEARCH_HISTORY, RESET_SEARCH_HISTORY} from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case ADD_SEARCH_HISTORY:
            return [...state, action.payload]
        case RESET_SEARCH_HISTORY:
            return [];
        default:
            return state;
    }
}