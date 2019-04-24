import { FETCH_FILTER_VALUES, FILTER_SELECTED, FILTER_RESET } from './types'
import { nodeServer } from '../api/index'

export const filterSelect = payload => ({ type: FILTER_SELECTED, payload })
export const filterReset = () => ({ type: FILTER_RESET })

export const fetchFilterValues = () => async (dispatch, getState) => {
    const { keyword } = getState();
    const res = await nodeServer.post('/api/filter', { keyword })
    dispatch({ type: FETCH_FILTER_VALUES, payload: res.data })
}