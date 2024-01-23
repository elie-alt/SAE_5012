// assets/react/components/App.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';

function Button() {
    const { theme, toggle, dark } = useContext(ThemeContext);

    return (
        <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <button
                type="button"
                onClick={toggle}
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    outline: 'none'
                }}
            >
                Toggle to {!dark ? 'Dark' : 'Light'} theme
            </button>
        </div>
    );
}

export default Button;
