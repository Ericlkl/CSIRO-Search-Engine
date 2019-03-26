import {UPDATE_XML_RESULT} from './types';

export const updateXMLResult = tags => ({
    type: UPDATE_XML_RESULT,
    payload: tags
});