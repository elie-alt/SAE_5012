// assets/theme-context.js
import React from 'react';
import Lfront from "../public/media/Lfront.png";
import Lback from "../public/media/Lback.png";
import Dfront from "../public/media/Dfront.png";
import Dback from "../public/media/Dback.png";

const themes = {
    dark: {
        backgroundColor: '#102770',
        color: 'white',
        cardF: Lfront,
        cardB: Lback
    },
    light: {
        backgroundColor: 'white',
        color: '#102770',
        cardB:  Dback,
        cardF: Dfront
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
