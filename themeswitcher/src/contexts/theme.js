import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //if someone uses this context without a Provider, this will be the default value.
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider  //same as <ThemeContext.Provider>

export default function useTheme(){  //custom hook
    return useContext(ThemeContext)
} 