import React, { Component } from "react";
import styled from "styled-components";

import axios from "../../helpers/axios";

import Filter from "../../components/UI/Filter/Filter";
import Countries from "../../pages/Countries/Countries";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import SearchBar from "../../components/UI/SearchBar/SearchBar";

const LayoutWrapper = styled.div`
    & > .__browse {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 5% 60px 5%;
    }

    @media (max-width: 700px) {
        & > .__browse {
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;

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
        const region = e.target.value.toLowerCase();
        this.setState({ filterTerm: region });
        this.filterByRegion(region);
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

    filterByRegion = (region) => {
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
            <LayoutWrapper>
                <NavBar toggled={this.props.toggled}/>
                <div className="__browse">
                    <SearchBar
                        searched={(e) => this.searchHandler(e)}
                        searchTerm={this.state.searchTerm}
                    />
                    <Filter filtered={(e) => this.filterHandler(e)} />
                </div>
                <Countries countries={this.state.countries} />
            </LayoutWrapper>
        );
    }
}

export default Layout;
