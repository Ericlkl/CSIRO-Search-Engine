import {
    FILTER_GENDER,
    FILTER_SORTBY,
    FILTER_COUNTRY,
    FILTER_CONTINENT,
    FILTER_STATUS,
    FILTER_RESET
} from './types'

export const filterReset = () => ({ type: FILTER_RESET} )
export const filterGender = payload => ({ type: FILTER_GENDER, payload })
export const filterSortBy = payload => ({ type: FILTER_SORTBY, payload })
export const filterCountry = payload => ({ type: FILTER_COUNTRY, payload })
export const filterContinent = payload => ({ type: FILTER_CONTINENT, payload })
export const filterStatus = payload => ({ type: FILTER_STATUS, payload })