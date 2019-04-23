import { TURN_DARK_MODE_ON, USE_DEFAULT_THEME} from '../actions/types'

const defaultTheme = {
    navbarBgColor: "rgb(53, 189, 178)",
    resultListBgColor: "white",
    bgColor: "#f4f4f4",
    filterBox:{
        bgColor: "white",
        labelColor: "black"
    },
    textColor: "black"
};

// 323333
// 414242

const darkModeTheme = {
    navbarBgColor: "#666666",
    resultListBgColor: "#414242",
    bgColor: "#333333",
    filterBox:{
        bgColor: "#666666",
        labelColor: "white"
    },
    textColor: "white"
}

export default (state = defaultTheme, action) => {
    switch(action.type){
        case TURN_DARK_MODE_ON:
            return darkModeTheme;
        case USE_DEFAULT_THEME:
            return defaultTheme;
        default:
            return state;
    }
}