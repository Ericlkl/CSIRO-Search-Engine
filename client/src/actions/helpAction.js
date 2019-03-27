import {SHOW_ALL_HELP_SECTION, CLOSE_HELP_SECTION} from './types'

export const showHelpSections = () => ({
    type: SHOW_ALL_HELP_SECTION
})

export const closeHelpSection = (section) => ({
    type: CLOSE_HELP_SECTION,
    payload: section
});