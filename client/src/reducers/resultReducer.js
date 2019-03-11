import { FETCH_RESULTS } from '../actions/types'

const defaultState = {
    total: 0,
    hits: []
}

export default (state = defaultState, action ) => {
    switch(action.type){
        case FETCH_RESULTS:
            return {...action.payload};
        default:
            return state;
    }
}