// assets/theme-context.js
import React from 'react';

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
};

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false);

    React.useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark);
    }, [dark]);

    const toggle = () => {
        const isDark = !dark;
        localStorage.setItem('dark', JSON.stringify(isDark));
        setDark(isDark);
    };

    const theme = dark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
