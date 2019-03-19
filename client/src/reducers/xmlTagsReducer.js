import {UPDATE_XML_TAGS} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case UPDATE_XML_TAGS:
            return action.payload
        default:
            return state;
    }
}