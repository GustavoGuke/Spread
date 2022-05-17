import { createContext } from "react"

export const themes = {
    primary: {
        background: '#030',
        color: '#efefef'
    }
}

export const ThemeContex = createContext(themes)