import {SHOW_ALL_HELP_SECTION, CLOSE_HELP_SECTION} from '../actions/types'

const defaultState = {
    searchBar: false,
    filter: false,
    resultList: false
}

export default (state = defaultState, action) => {
    switch(action.type){
        case SHOW_ALL_HELP_SECTION:
            return {    
                searchBar: true,
                filter: true,
                resultList: true
            }
        case CLOSE_HELP_SECTION:
            return { ...state, [action.payload]: false}
        default:
            return state
    }
}