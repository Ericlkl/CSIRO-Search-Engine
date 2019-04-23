import { TURN_DARK_MODE_ON, USE_DEFAULT_THEME} from '../actions/types'

export default (state = "default", action) => {
    switch(action.type){
        case TURN_DARK_MODE_ON:
            return "dark";
        case USE_DEFAULT_THEME:
            return "default";
        default:
            return state;
    }
}