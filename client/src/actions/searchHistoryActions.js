import { ADD_SEARCH_HISTORY,RESET_SEARCH_HISTORY } from './types'

export const addSearchHistory = keyword => ({ type: ADD_SEARCH_HISTORY, payload: keyword })

export const resetSearchHistory = () => ({type: RESET_SEARCH_HISTORY})