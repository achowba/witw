import { Component } from "react";
import axios from "../../../helpers/axios";

import NavBar from "../../Navigation/NavBar/NavBar";
import Back from "../../Navigation/Back/Back.js";
import styled from "styled-components";

const Country = styled.div`
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(2, 1fr);
    margin: 60px 5% 60px 5%;

    & > .__flag {
        background-size: cover;
        background-position: center;
        height: calc(0.5 * 100vh);
    }

    & > .__details > span {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    & > .__details > span > p > b {
        color: #333333;
    }

    & > .__details > span > p {
        color: #555555;
        margin: 8px 0;
    }
`;

class CountryDetail extends Component {
    constructor() {
        super();
        this.state = {
            country: null,
        };
    }

    componentDidMount() {
        const countryName = this.props.match.params.name;
        axios
            .get(`/name/${countryName}`)
            .then((response) => {
                this.setState({
                    country: response.data[0],
                });
            })
            .catch((err) => {
                console.log("---------------An Error Occured!---------------");
                console.log(err);
                console.log("-----------------------------------------------");
            });
    }

    getLanguages = (languages) => {
        const languageNames = languages.map(({name}) => name);
        return languageNames.join(', ');
    }

    render() {
        let countryDetails = null;
        if (this.state.country) {
            countryDetails = <Country>
                <div className="__flag" style={{backgroundImage: `url(${this.state.country.flag})`}} alt=""></div>
                <div className="__details">
                    <h1>{this.state.country.name}</h1>
                    <span>
                        <p><b>Native Name: </b>{this.state.country.nativeName}</p>
                        <p><b>Top Level Domain: </b>{this.state.country.topLevelDomain[0]}</p>
                    </span>
                    <span>
                        <p><b>Population: </b>{this.state.country.population.toLocaleString('en', {useGrouping:true})}</p>
                        <p><b>Currencies: </b>{this.state.country.currencies[0].name}</p>
                    </span>
                    <span>
                        <p><b>Region: </b>{this.state.country.region}</p>
                        <p><b>Languages: </b>{this.getLanguages(this.state.country.languages)}</p>
                    </span>
                    <span>
                        <p><b>Sub Region: </b>{this.state.country.subregion}</p>
                    </span>
                    <span>
                        <p><b>Capital: </b>{this.state.country.capital}</p>
                    </span>
                </div>
            </Country>
        }

        return (
            <>
                <NavBar />
                <Back history={this.props.history}/>
                {countryDetails}
            </>
        );
    }
}

export default CountryDetail;
