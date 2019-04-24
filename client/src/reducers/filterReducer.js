import { FILTER_SELECTED, FILTER_RESET } from '../actions/types';

const filterState = {
};


export default (state = filterState, action) => {

    let newState = Object.assign({}, state);

    switch(action.type){
        case FILTER_SELECTED:
            return newState;

        case FILTER_RESET:
            return filterState;
        default:
            return state
    }
}