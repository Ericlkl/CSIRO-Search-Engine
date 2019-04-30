import reducer from '../filterValues';
import * as actionTypes from '../../actions/types';

describe('FilterValues Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({});
    });

    it('Should able to save the filter options in array', () => {
        expect(reducer(
            // Hypothesys Inital State
            {}
            ,
            // Action 
            {
                type: actionTypes.FETCH_FILTER_VALUES,
                payload: {
                    MEDICATION: { time: ['during DCT'], type1: ["ABCDERF"]},
                    DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
                }
            }))
            .toEqual({
                MEDICATION: { time: ['during DCT'], type1: ["ABCDERF"]},
                DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
            });
    });

})