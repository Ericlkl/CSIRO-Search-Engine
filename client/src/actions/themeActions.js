import {TURN_DARK_MODE_ON, USE_DEFAULT_THEME} from './types'

export const useDarkModeTheme = () => ({
    type: TURN_DARK_MODE_ON
})

export const useDefaultTheme = () => ({
    type: USE_DEFAULT_THEME
})