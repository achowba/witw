import { Component } from "react";

import classes from "./ToggleTheme.module.css";

import LightLogo from "../../../assets/img/sun.svg";
import DarkLogo from "../../../assets/img/moon.svg";

class ToggleTheme extends Component {
    constructor() {
        super();
        this.state = {
            isDark: false,
        };
    }

    toggleThemeHandler = () => {
        const currentTheme = this.state.isDark;
        this.setState({
            isDark: !currentTheme,
        });
    };

    render() {
        const theme = {
            icon: this.state.isDark ? LightLogo : DarkLogo,
            status: this.state.isDark ? "Light Mode" : "Dark Mode",
        };

        return (
            <button
                className={classes.ToggleTheme}
                onClick={this.toggleThemeHandler}
                title={`Switch to ${theme.status}`}
            >
                <img
                    className={classes.ThemeIcon}
                    src={theme.icon}
                    alt="Toggle Theme" />
                <p className={classes.ThemeStatus}>{theme.status}</p>
            </button>
        );
    }
}

export default ToggleTheme;
