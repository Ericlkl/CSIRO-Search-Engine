import { ADD_SEARCH_HISTORY,RESET_SEARCH_HISTORY } from './types'

export const addSearchHistory = () => (dispatch, useState) => dispatch({ type: ADD_SEARCH_HISTORY, payload: useState().keyword.trim()})

export const resetSearchHistory = () => ({type: RESET_SEARCH_HISTORY})