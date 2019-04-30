import reducer from '../result';
import * as actionTypes from '../../actions/types';

describe('Result Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            total: 0,
            results: []
        });
    });

    it('Should update the display result when it fetch result successfully', () => {
        expect(reducer(
            // Hypothesys Inital State
            {
                total: 0,
                results: []
            },
            // Action 
            {
                type: actionTypes.FETCH_RESULTS,
                payload: {
                    total: 64,
                    results: ["odihaofdif","sfidhfodsfi"]
                }
            }))
            .toEqual({
                total: 64,
                results: ["odihaofdif","sfidhfodsfi"]
            });
    });

})