import { FETCH_SUGGESTION } from '../actions/types'

export default (state = [], action) => {
    switch(action.type){
        case FETCH_SUGGESTION:
            return action.payload;
        default:
            return state;
    }
}