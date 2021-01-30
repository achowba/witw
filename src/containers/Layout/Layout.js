import React, { Component } from "react";

import axios from "../../helpers/axios";

import NavBar from "../../components/Navigation/NavBar/NavBar";
import Filter from "../../components/UI/Filter/Filter";
import Countries from "../../components/Countries/Countries";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

import classes from "./Layout.module.css";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            initialCountries: [],
            filteredCountries: [],
            searchTerm: "",
            filterTerm: "",
        };
    }

    componentDidMount() {
        axios
            .get(`/all`)
            .then((response) => {
                this.setState({
                    countries: response.data,
                    initialCountries: response.data,
                });
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    }

    searchHandler = (e) => {
        const input = e.target.value;

        this.setState({
            searchTerm: input,
        });

        this.searchCountries(input);
    };

    filterHandler = (e) => {
        const input = e.target.value;
        this.setState({
            filterTerm: input,
        });
        this.filterCountries(input);
    };

    searchCountries = (query) => {
        let countries = [...this.state.initialCountries];
        const isFiltered = this.state.filteredCountries.length !== 0;

        if (isFiltered) {
            countries = [...this.state.filteredCountries];
        }

        if (query.trim() === "") {
            this.setState({
                countries: isFiltered
                    ? [...this.state.filteredCountries]
                    : this.state.initialCountries,
            });
        } else {
            let foundCountries = countries.filter((country) => {
                const [name, capital] = [
                    country.name.toLowerCase(),
                    country.capital.toLowerCase(),
                ];

                return name.includes(query) || capital.includes(query);
            });

            this.setState({
                countries: foundCountries,
            });
        }
    };

    filterCountries = (region) => {
        const countries = [...this.state.initialCountries];

        if (region === "") {
            this.setState({
                countries: this.state.initialCountries,
                filteredCountries: [],
            });
        } else {
            let foundCountries = countries.filter(
                (country) =>
                    country.region.toLowerCase() === region.toLowerCase()
            );

            this.setState({
                countries: foundCountries,
                filteredCountries: foundCountries,
            });
        }
    };

    render() {
        return (
            <>
                <NavBar />
                <div className={classes.Browse}>
                    <SearchBar
                        searched={(e) => this.searchHandler(e)}
                        searchTerm={this.state.searchTerm}
                    />
                    <Filter filtered={(e) => this.filterHandler(e)} />
                </div>
                <Countries countries={this.state.countries} />
            </>
        );
    }
}

export default Layout;
