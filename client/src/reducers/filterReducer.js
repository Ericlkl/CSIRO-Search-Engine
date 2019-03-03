import { FILTER_GENDER } from '../actions/types';

const filterState = {
    sortBy: "most recent",
    gender: [],
    country: "Australia",
    continent: [],
    status: []
};

export default (state = filterState, action) => {
    switch(action.type){
        case FILTER_GENDER:
            return action.payload;
        default:
            return state
    }
}