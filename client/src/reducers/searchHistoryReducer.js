import {ADD_SEARCH_HISTORY, RESET_SEARCH_HISTORY} from '../actions/types'

export default (state = ["Cancel", "Sars"], action) => {
    switch(action.type){
        case ADD_SEARCH_HISTORY:
            if (action.payload === "" || state.includes(action.payload)) {
                return state
            } 
            return [...state, action.payload]
        case RESET_SEARCH_HISTORY:
            return [];
        default:
            return state;
    }
}