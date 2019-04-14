import {
    FILTER_TIME,
    FILTER_INDICATOR,
    FILTER_SORTBY,
    FILTER_TAG,
    FILTER_RESET,
} from '../actions/types';

const filterState = {
    sortBy: "Revelance",
    Time: [],
    Indicator: [],
    Tag: []
};


export default (state = filterState, action) => {

    let newState = Object.assign({}, state);

    switch(action.type){
        case FILTER_TIME:
            newState.Time = state.Time.filter(Time => Time !== action.payload.value)
            if (action.payload.checked){
                newState.Time.push(action.payload.value);
            }
            return newState

        case FILTER_INDICATOR:
            newState.Indicator = state.Indicator.filter(Indicator => Indicator !== action.payload.value)
            if (action.payload.checked){
                newState.Indicator.push(action.payload.value);
            }
            return newState

        case FILTER_TAG:
            newState.Tag = state.Tag.filter(Tag => Tag !== action.payload.value)
            if (action.payload.checked){
                newState.Tag.push(action.payload.value);
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