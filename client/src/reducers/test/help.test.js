import reducer from '../help';
import * as actionTypes from '../../actions/types';

describe('Help Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            searchBar: false,
            filter: false,
            resultList: false
        });
    });

    it('Should pops all the help section up', () => {
        expect(reducer(
            // Hypothesys Inital State
            {
                searchBar: false,
                filter: false,
                resultList: false
            },
            // Action 
            {
                type: actionTypes.SHOW_ALL_HELP_SECTION,
            }))
            .toEqual({    
                searchBar: true,
                filter: true,
                resultList: true
            });
    });

    it('Should disable one specific help section', () => {
        expect(reducer(
            // Hypothesys Inital State
            {    
                searchBar: true,
                filter: true,
                resultList: true
            },
            // Action 
            {
                type: actionTypes.CLOSE_HELP_SECTION,
                payload: "resultList"
            }))
            .toEqual({    
                searchBar: true,
                filter: true,
                resultList: false
            });
    });

})