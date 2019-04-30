import { FETCH_SUGGESTION, CLOSE_SUGGESTION_BOX } from '../actions/types'

export default (state = { show: false, suggestions: []}, action) => {
    switch(action.type){
        case FETCH_SUGGESTION:
            return {
                show: true,
                suggestions: action.payload
            };
        case CLOSE_SUGGESTION_BOX:
            return { ...state, show: false}
        default:
            return state;
    }
}