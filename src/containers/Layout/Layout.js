import React, { Component } from 'react'

import axios from '../../helpers/axios';

import NavBar from '../../components/NavBar/NavBar';
import Filter from '../../components/UI/Filter/Filter';
import Countries from '../../components/Countries/Countries';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

import classes from './Layout.module.css';

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            initialCountries: [],
            searchTerm: '',
        }
    }

    componentDidMount () {
        axios.get(`/all`)
            .then((response) => {
                this.setState({
                    countries: response.data,
                    initialCountries: response.data,
                });
            }).catch((err) => {
                console.log('---------------An Error Occured!---------------');
                console.log(err);
                console.log('-----------------------------------------------');
            });
    }

    searchHandler = (e) => {
        const input = e.target.value;
        this.setState({
            searchTerm: input,
        });
        this.searchCountries(input);
    }

    searchCountries = (query) => {
        const countries = [...this.state.initialCountries];

        if (query.trim() === '') {
            this.setState({
                countries: this.state.initialCountries,
            });
        } else {
            let foundCountries = countries.filter((country) => {
                const [name, capital] = [country.name.toLowerCase(), country.capital.toLowerCase()];

                return name.includes(query) || capital.includes(query);
            });

            this.setState({
                countries: foundCountries,
            });
        }
    }

    render() {
        return (
            <>
                <NavBar/>
                <div className={classes.Browse}>
                    <SearchBar
                        searched={(e) => this.searchHandler(e)}
                        searchTerm={this.state.searchTerm} />
                    <Filter filtered/>
                </div>
                <Countries countries={this.state.countries}/>
            </>
        );
    }
}

export default Layout;
