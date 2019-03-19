import {UPDATE_XML_TAGS} from './types';

export const updateXMLTags = tags => ({
    type: UPDATE_XML_TAGS,
    payload: tags
});