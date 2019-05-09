import reducer from '../theme';
import * as actionTypes from '../../actions/types';

const defaultTheme = {
    navbarBgColor: "#00607F",
    resultListBgColor: "white",
    bgColor: "#f4f4f4",
    filterBox:{
        bgColor: "white",
        labelColor: "black"
    },
    textColor: "black",
    chart: {
        labelColor: "black"
    }
};

const darkModeTheme = {
    navbarBgColor: "#666666",
    resultListBgColor: "#414242",
    bgColor: "#333333",
    filterBox:{
        bgColor: "#666666",
        labelColor: "white"
    },
    textColor: "white",
    chart: {
        labelColor: "white"
    }
};

describe('Theme Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(defaultTheme);
    });

    it('Should Able to turn the UI to dark color', () => {
        expect(reducer(
            // Hypothesys Inital State
            defaultTheme,
            // Action 
            {
                type: actionTypes.TURN_DARK_MODE_ON
            }))
            .toEqual(darkModeTheme);
    });

    it('Should Able to restore the UI Color from dark to default setting', () => {
        expect(reducer(
            // Hypothesys Inital State
            darkModeTheme,
            // Action 
            {
                type: actionTypes.USE_DEFAULT_THEME
            }))
            .toEqual(defaultTheme);
    });

})