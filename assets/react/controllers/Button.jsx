import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';

function ButtonTheme(props) {
    const { theme, toggle, dark } = useContext(ThemeContext);
    const { backgroundColorTheme } = props;

    const containerStyle = {
        backgroundColor: backgroundColorTheme || theme.backgroundColor,
        color: theme.color
    };

    const buttonStyle = {
        backgroundColor: backgroundColorTheme || theme.backgroundColor,
        color: theme.color,
        outline: 'none'
    };

    return (
        <div className="App" style={containerStyle}>
            <button
                type="button"
                onClick={toggle}
                style={buttonStyle}
            >
                Mettre le theme {!dark ? 'Foncé' : 'Clair'}
            </button>
        </div>
    );
}

export default ButtonTheme;
