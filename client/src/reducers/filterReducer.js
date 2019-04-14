import {
    FILTER_TIME,
    FILTER_INDICATOR,
    FILTER_SORTBY,
    FILTER_TAG,
    FILTER_RESET,
} from '../actions/types';

const filterState = {
    sortBy: "Revelance",
    time: ["Before DCT", "After DCT"],
    indicator: ["Mention", "Test", "Event", "Not Present"],
    tag: [ "Medication", "Hyperlipidemia", "Hypertension", "CAD", "Family_Hist", "Diabetes"]
};


export default (state = filterState, action) => {

    let newState = Object.assign({}, state);

    switch(action.type){
        case FILTER_TIME:
            newState.time = state.time.filter(time => time !== action.payload.value)
            if (action.payload.checked){
                newState.time.push(action.payload.value);
            }
            return newState

        case FILTER_INDICATOR:
            newState.indicator = state.indicator.filter(indicator => indicator !== action.payload.value)
            if (action.payload.checked){
                newState.indicator.push(action.payload.value);
            }
            return newState

        case FILTER_TAG:
            newState.tag = state.tag.filter(tag => tag !== action.payload.value)
            if (action.payload.checked){
                newState.tag.push(action.payload.value);
            }
            return newState

        case FILTER_SORTBY:
            newState.sortBy = action.payload
            return newState;

        case FILTER_RESET:
            return filterState;
        default:
            return state
    }
}