import { Component } from "react";
import styled, { withTheme } from "styled-components";

import LightLogo from "../../../assets/img/sun.svg";
import DarkLogo from "../../../assets/img/moon.svg";

const ToggleThemeButton = styled.button`
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    outline: none;

    .__icon {
        height: 20px;
        margin-right: 10px;
        width: 20px;
    }

    .__status {
        color: ${props => props.theme.boldText};
        content: "Yes";
        font-size: 1rem;
        font-weight: 500;
    }
`;

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
            icon: this.props.theme.isDark ? LightLogo : DarkLogo,
            status: this.props.theme.isDark ? "Light Mode" : "Dark Mode",
        };

        return (
            <ToggleThemeButton
                onClick={this.props.toggled}
                title={`Switch to ${theme.status}`}
            >
                <img
                    className="__icon"
                    src={theme.icon}
                    alt="Toggle Theme"
                />
                <p className="__status">{theme.status}</p>
            </ToggleThemeButton>
        );
    }
}

export default withTheme(ToggleTheme);
