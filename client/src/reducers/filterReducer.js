import { 
    FILTER_GENDER,
    FILTER_CONTINENT,
    FILTER_STATUS
} from '../actions/types';

const filterState = {
    sortBy: "most recent",
    gender: ["Male"],
    country: "Australia",
    continent: [],
    status: []
};

export default (state = filterState, action) => {
    let newState = Object.assign({}, state);

    switch(action.type){
        case FILTER_GENDER:
            newState.gender = state.gender.filter(gender => gender !== action.payload.value)
            if (action.payload.checked){
                newState.gender.push(action.payload.value);
            }
            return newState

        case FILTER_CONTINENT:
            newState.continent = state.continent.filter(continent => continent !== action.payload.value)
            if (action.payload.checked){
                newState.continent.push(action.payload.value);
            }
            return newState

        case FILTER_STATUS:
            newState.status = state.status.filter(status => status !== action.payload.value)
            if (action.payload.checked){
                newState.status.push(action.payload.value);
            }
            return newState
        default:
            return state
    }
}