import { UPDATE_SEARCH_KEYWORD } from '../actions/types';

export default (state = "", action) => {
    switch(action.type){
        case UPDATE_SEARCH_KEYWORD:
            return action.payload;
        default:
            return state
    }
}