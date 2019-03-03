import {FETCH_ITEMS, FILTER_GENDER} from './types'

export const fetchItems = (payload) => {
    return {
        type: FETCH_ITEMS,
        payload
    }
}

export const filterGender = (payload) => {
    return {
        type: FILTER_GENDER,
        payload
    }
}