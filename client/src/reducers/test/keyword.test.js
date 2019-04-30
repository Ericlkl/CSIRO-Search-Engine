import reducer from '../keyword';
import * as actionTypes from '../../actions/types';

describe('Keyword Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual("");
    });

    it('Should update the search keyword when user enter word in search Field', () => {
        expect(reducer(
            // Hypothesys Inital State
            {
                searchBar: false,
                filter: false,
                resultList: false
            },
            // Action 
            {
                type: actionTypes.UPDATE_SEARCH_KEYWORD,
                payload: "Disease"
            }))
            .toEqual("Disease");
    });

})