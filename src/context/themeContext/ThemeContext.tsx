import React, { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './ThemeReducer'

interface ThemeContextProps {
 theme: ThemeState;
 setDarkTheme: () => void;
 setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any ) =>{

    const colorScheme= useColorScheme();

    const [ theme, dispatch ] =  useReducer( themeReducer, ( colorScheme === 'dark' ) ? darkTheme : lightTheme ); // TODO: necesito leer el tema global del dispositivo

    useEffect( () =>{
        ( colorScheme === 'light')
        ? setLightTheme()
        : setDarkTheme()
    }, [ colorScheme ])

    const setDarkTheme= () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDarkTheme');
    }

    const setLightTheme= () => {
        dispatch({ type: 'set_light_theme'});
        console.log('setLightTheme');
    }
    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}