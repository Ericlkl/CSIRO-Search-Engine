import { TURN_DARK_MODE_ON, USE_DEFAULT_THEME} from '../actions/types'
import {bake_cookie, read_cookie} from 'sfcookies'

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
}

export default (state = defaultTheme, action) => {

    // If there is no theme cookies in the browser
    if (read_cookie("theme").length === 0){
        bake_cookie("theme", defaultTheme);
    }
    else {
        state = read_cookie("theme");
    }
    // state = read_cookie("theme")
    switch(action.type){
        case TURN_DARK_MODE_ON:
            bake_cookie("theme", darkModeTheme);
            return darkModeTheme;
        case USE_DEFAULT_THEME:
            bake_cookie("theme", defaultTheme);
            return defaultTheme;
        default:
            return state;
    }
}