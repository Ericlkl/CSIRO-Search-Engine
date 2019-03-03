import {
    FETCH_ITEMS, 
    FILTER_GENDER,
    FILTER_SORTBY,
    FILTER_COUNTRY,
    FILTER_CONTINENT,
    FILTER_STATUS,
    FILTER_RESET
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

export const filterSortBy = (payload) => {
    return {
        type: FILTER_SORTBY,
        payload
    }
}

export const filterReset = () => {
    return {
        type: FILTER_RESET
    }
}

export const filterCountry = (payload) => {
    return {
        type: FILTER_COUNTRY,
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