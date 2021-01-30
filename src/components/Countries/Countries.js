import { Link } from "react-router-dom";

import Country from "./Country/Country";
import classes from "./Countries.module.css";

const countries = (props) => {
    let countries = null;

    if (props.countries.length !== 0) {
        countries = (
            <>
                {props.countries.map((country, index) => {
                    return (
                        <Link
                            key={country.alpha3Code}
                            to={`/country/${country.name.toLowerCase()}`}
                        >
                            <Country
                                key={country.alpha3Code}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flag}
                            ></Country>
                        </Link>
                    );
                })}
            </>
        );
    }

    return <div className={classes.Countries}>{countries}</div>;
};

export default countries;
