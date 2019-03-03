import {FETCH_ITEMS} from './types'

export const fetchItems = (payload) => {
    return {
        type: FETCH_ITEMS,
        payload
    }
}