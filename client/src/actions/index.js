import {
    FETCH_RESULTS, 
    FILTER_GENDER,
    FILTER_SORTBY,
    FILTER_COUNTRY,
    FILTER_CONTINENT,
    FILTER_STATUS,
    FILTER_RESET,
    ADD_SEARCH_HISTORY,
    RESET_SEARCH_HISTORY,
    UPDATE_SEARCH_KEYWORDS,
    GET_SEARCH_HISTORY_COOKIES
} from './types'

import axios from 'axios';
import _ from 'lodash';

export const fetchResults = keyword => async dispatch => {
    const res = await axios.get('/main/xml/_search?q='+ keyword);

    // Result Array contains all the result object
    const payload = {
        results: [],
        total: res.data.hits.total
    };

    // Loop through the hits object
    res.data.hits.hits.forEach( hit => {
        // First Split the text and put every text into array
        // Second Filter out the "" by length === 0
        const informations = _.split(hit._source.text,/\\[a-z]+/)
                        .filter(word => word.length > 0 );
                        
        payload.results.push({
            fileName: hit._id,
            tags: hit._source.tags,
            informations
        });
    })
    
    dispatch({
        type: FETCH_RESULTS,
        payload
    });
}

export const updateSearchKeywords = (payload) => {
    return {
        type: UPDATE_SEARCH_KEYWORDS,
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

export const addSearchHistory = (keyword) => { 
    return {
        type: ADD_SEARCH_HISTORY,
        payload: keyword
    }
}

export const getSearchHistoryCookies = (values) => { 
    return {
        type: GET_SEARCH_HISTORY_COOKIES,
        payload: values
    }
}

export const resetSearchHistory = () => ({type: RESET_SEARCH_HISTORY})