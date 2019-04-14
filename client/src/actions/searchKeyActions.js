import { UPDATE_SEARCH_KEYWORD } from './types'

export const updateSearchKeyword = keyword => ({
    type: UPDATE_SEARCH_KEYWORD,
    payload: keyword
})