import { TURN_DARK_MODE_ON, USE_DEFAULT_THEME} from '../actions/types'

const defaultTheme = {
    bgColor: "#f4f4f4",
    filterBox:{
        bgColor: "white",
        labelColor: "black"
    },
    textColor: "black"
};

const darkModeTheme = {
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