import {
    FILTER_TIME,
    FILTER_INDICATOR,
    FILTER_SORTBY,
    FILTER_TAG,
    FILTER_RESET,
} from './types'

export const filterReset = () => ({ type: FILTER_RESET} )
export const filterTime = payload => ({ type: FILTER_TIME, payload })
export const filterSortBy = payload => ({ type: FILTER_SORTBY, payload })
export const filterIndicator = payload => ({ type: FILTER_INDICATOR, payload })
export const filterTag = payload => ({ type: FILTER_TAG, payload })