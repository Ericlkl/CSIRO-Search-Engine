import { FILTER_SELECTED, FILTER_RESET } from '../actions/types';
import _ from 'lodash';

const filterState = {

};


export default (state = filterState, action) => {

    switch(action.type){
        case FILTER_SELECTED:
            // We can not modify the previous state in redux 
            let newState = Object.assign({}, state);

            // Get the tagName which the user selected
            const tagName = Object.keys(action.payload)[0];
            // Get the value which the user selected
            const selectedValue = action.payload[tagName];

            // If the tag value has already in the array, Remove it
            if (newState[tagName].includes(selectedValue)) _.remove(newState[tagName], value => value === selectedValue)
            // Otherwise add the value in to the array
            else newState[tagName].push(selectedValue)
            
            console.log(newState);
            // Return the new state of the filter object
            return newState;

        case FILTER_RESET:
            return action.payload;
        default:
            return state
    }
}