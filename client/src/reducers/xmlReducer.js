import {UPDATE_XML_RESULT} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case UPDATE_XML_RESULT:
            return action.payload
        default:
            return state;
    }
}