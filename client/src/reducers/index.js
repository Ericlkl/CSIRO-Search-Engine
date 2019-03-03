import { FETCH_ITEMS } from '../actions/types';
import { combineReducers } from 'redux';

const searchItemReducer = (state = "", action) => {
    switch(action.type){
        case FETCH_ITEMS:
            return action.payload;
        default:
            return state
    }
}

export default combineReducers({
    searchItem: searchItemReducer
})