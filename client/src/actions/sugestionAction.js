import { FETCH_SUGGESTION, CLOSE_SUGGESTION_BOX } from './types'
import {bioontologyServer} from '../api/index';
import _ from 'lodash';

export const fetchSuggestion = keyword => async dispatch => {

    if (keyword === "") return dispatch({ type: CLOSE_SUGGESTION_BOX });

    const res = await bioontologyServer.get("/search?",{
        params: {
            q: `$${keyword}*`,
            ontology:"SNOMEDCT",
            suggest:true,
            display_context:false,
            require_definitions:false,
            display_links:false,
            fbclid:"IwAR3hCJ3MQJVjGjvQcqYASojeOoeOD28fd-ekLOUkzMBS9NMysgNl4GxuJdw",
            subtree_ontology:"SNOMEDCT",
            apikey:"95c268f6-fef3-4de7-919e-6a3013f5b7a0"
        }})

    const suggestions = res.data.collection.map(obj => _.capitalize(obj.prefLabel))

    dispatch({
        type: FETCH_SUGGESTION,
        payload:  _.uniq(suggestions)
    });
}

export const closeSuggestionBox = () => ({ type: CLOSE_SUGGESTION_BOX });