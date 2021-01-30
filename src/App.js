import Layout from "./containers/Layout/Layout";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CountryDetail from "./components/Countries/CountryDetail/CountryDetail";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Layout />
                </Route>
                <Route exact path="/country/:name" component={CountryDetail} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
