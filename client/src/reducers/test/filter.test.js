import reducer from '../filter';
import * as actionTypes from '../../actions/types';

describe('Filter Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({});
    });

    it('Should Reset the filter to Empty Selection State', () => {
        expect(reducer(
            // Hypothesys Inital State
            {
                MEDICATION: { time: ['during DCT'], type1: []},
                DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
            },
            // Action 
            {
                type: actionTypes.FILTER_RESET,
                payload: {
                    MEDICATION: { time: ['during DCT'], type1: ["ABCDERF"]},
                    DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
                }
            }))
            .toEqual({
                MEDICATION: { time: [], type1: []},
                DIABETES: { time: [], type1: []}
            });
    });

    it('Should Put the checkbox value into filter object', () => {
        expect(reducer(
            // Hypothesys Inital State
            {
                MEDICATION: { time: ['during DCT'], type1: []},
                DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
            },
            // Action 
            {
                type: actionTypes.FILTER_SELECTED,
                payload: ["MEDICATION", "type1", "ABCDEFFFF"]
            }))
            .toEqual(
            {
                MEDICATION: { time: ['during DCT'], type1: ["ABCDEFFFF"]},
                DIABETES: { time: ['during DCT'], type1: ["ABCD"]}
            });
    });

})