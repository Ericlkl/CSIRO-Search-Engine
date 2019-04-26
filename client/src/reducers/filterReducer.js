import { FILTER_SELECTED, FILTER_RESET } from '../actions/types';
import _ from 'lodash';

const filterState = {

};


export default (state = filterState, action) => {

    switch(action.type){
        case FILTER_SELECTED:
            // We can not modify the previous state in redux 
            let newState = _.cloneDeep(state);

            // Get the tagName which the user selected
            const mainTagName = Object.keys(action.payload)[0];
            // SubTag Name
            const subTagName = Object.keys(action.payload[mainTagName])[0];
            // Get the value which the user selected
            const selectedValue = action.payload[mainTagName][subTagName];

            // If the value in the subtag has already in the array, Remove it
            if (newState[mainTagName][subTagName].includes(selectedValue)) _.remove(newState[mainTagName][subTagName], value => value === selectedValue)
            // Otherwise add the value in to the array
            else newState[mainTagName][subTagName].push(selectedValue)

            // Return the new state of the filter object
            return newState;

        case FILTER_RESET:
            return action.payload;
        default:
            return state
    }
}