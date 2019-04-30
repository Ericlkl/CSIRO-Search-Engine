import { FETCH_FILTER_VALUES } from '../actions/types';

const defaultValues = {};

export default (state = defaultValues, action) => {
    switch(action.type){
        case FETCH_FILTER_VALUES:
            return action.payload;
        default:
            return state
    }
}