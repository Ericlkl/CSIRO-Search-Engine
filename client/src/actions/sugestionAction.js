import { FETCH_SUGGESTION } from './types'
import axios from 'axios';
import _ from 'lodash';

export const fetchSuggestion = keyword => async dispatch => {

    const res = await axios.get("http://data.bioontology.org/search?",{
        params: {
            q: `$${keyword}*`,
            ontology:"SNOMEDCT",
            suggest:true,
            display_context:false,
            require_definitions:false,
            display_links:false,
            fbclid:"IwAR3hCJ3MQJVjGjvQcqYASojeOoeOD28fd-ekLOUkzMBS9NMysgNl4GxuJdw",
            subtree_ontology:"SNOMEDCT",
            apikey:"95c268f6-fef3-4de7-919e-6a3013f5b7a0",
            fbclid:"IwAR1lZ_5YOdQT1PiXTKGY8iHwFGNu5JUo19mTcX6ulMXEp_tba0UQy_f2Nws",
        }
    })

    const suggestions = [];
    res.data.collection.forEach(obj => suggestions.push(obj.prefLabel))

    dispatch({
        type: FETCH_SUGGESTION,
        payload: _.uniq(suggestions)
    });
}