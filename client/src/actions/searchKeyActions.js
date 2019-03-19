import { UPDATE_SEARCH_KEYWORD } from './types'

export const updateSearchKeyword = searchTerm => ({
    type: UPDATE_SEARCH_KEYWORD,
    payload: searchTerm
})