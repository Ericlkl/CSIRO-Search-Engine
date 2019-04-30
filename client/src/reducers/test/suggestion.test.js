import reducer from '../suggestion';
import * as actionTypes from '../../actions/types';

describe('Suggestion Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ show: false, suggestions: []});
    });

    it('Should update suggestion values and show the box below the search field', () => {
        expect(reducer(
            // Hypothesys Inital State
            { show: false, suggestions: []},
            // Action 
            {
                type: actionTypes.FETCH_SUGGESTION,
                payload: ["abc","def","dvx"]
            }))
            .toEqual({ show: true, suggestions: ["abc","def","dvx"]});
    });

    it('Should Close the suggestion box if user click outside the box', () => {
        expect(reducer(
            // Hypothesys Inital State
            { show: true, suggestions: ["abc","def","dvx"]},
            // Action 
            {
                type: actionTypes.CLOSE_SUGGESTION_BOX
            }))
            .toEqual({ show: false, suggestions: ["abc","def","dvx"]});
    });

})