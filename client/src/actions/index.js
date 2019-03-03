import {
    FETCH_ITEMS, 
    FILTER_GENDER,
    FILTER_CONTINENT,
    FILTER_STATUS
} from './types'

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

export const filterContinent = (payload) => {
    return {
        type: FILTER_CONTINENT,
        payload
    }
}

export const filterStatus = (payload) => {
    return {
        type: FILTER_STATUS,
        payload
    }
}