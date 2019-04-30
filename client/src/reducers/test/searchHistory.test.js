import reducer from '../searchHistory';
import * as actionTypes from '../../actions/types';

describe('Search History Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('Should Reset the the search history values if user click on the reset btn', () => {
        expect(reducer(
            // Hypothesys Inital State
            ["abc", "def", "ghi"],
            // Action 
            {
                type: actionTypes.RESET_SEARCH_HISTORY
            }))
            .toEqual([]);
    });

    it('Should Add the search keyword to the search history values if it is new', () => {
        expect(reducer(
            // Hypothesys Inital State
            [],
            // Action 
            {
                type: actionTypes.ADD_SEARCH_HISTORY,
                payload: "disease"
            }))
            .toEqual(["disease"]);
    });

    it('Should not Add the search keyword to the search history values if it is already exist', () => {
        expect(reducer(
            // Hypothesys Inital State
            ["disease"],
            // Action 
            {
                type: actionTypes.ADD_SEARCH_HISTORY,
                payload: "disease"
            }))
            .toEqual(["disease"]);
    });

})