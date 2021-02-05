import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// theme files
import { GlobalStyles } from "./Theme/Global";
import { lightTheme, darkTheme } from "./Theme/Theme.js";

import Layout from "./containers/Layout/Layout";
import CountryDetail from "./pages/Countries/CountryDetail/CountryDetail";

class App extends Component {
    constructor() {
        super();
        this.state = {
            theme: "light",
        };
    }

    componentDidMount() {
        const theme = this.getTheme();
        this.setTheme(theme);
    }

    getTheme = () => {
        let theme = window.localStorage.getItem("app-theme");
        return theme || this.state.theme;
    };

    setTheme = (value = this.state.theme) => {
        this.setState({
            theme: value,
        });
        window.localStorage.setItem("app-theme", value);
    };

    toggleTheme = () => {
        if (this.getTheme() === "light") {
            this.setTheme("dark");
        } else {
            this.setTheme("light");
        }
    };

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <ThemeProvider
                        theme={
                            this.state.theme === "light"
                                ? lightTheme
                                : darkTheme
                        }
                    >
                        <GlobalStyles />
                        <Route exact path="/">
                            <Layout toggled={this.toggleTheme} />
                        </Route>
                        <Route exact path="/country/:name">
                            <CountryDetail toggled={this.toggleTheme} />
                        </Route>
                    </ThemeProvider>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
