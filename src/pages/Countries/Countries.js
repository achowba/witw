import { Link } from "react-router-dom";
import styled from "styled-components";

import Country from "./Country/Country";

const CountryWrapper = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 40px;
    padding: 0 5%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const countries = (props) => {
    let countries = null;

    if (props.countries.length !== 0) {
        countries = (
            <>
                {props.countries.map((country, index) => {
                    return (
                        <Link
                            key={country.cca3}
                            to={`/country/${country.name.common.toLowerCase()}`}
                        >
                            <Country
                                key={country.cca3}
                                name={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flags.svg}
                            ></Country>
                        </Link>
                    );
                })}
            </>
        );
    }

    // return <div className={classes.Countries}>{countries}</div>;
    return <CountryWrapper>{countries}</CountryWrapper>;
};

export default countries;
