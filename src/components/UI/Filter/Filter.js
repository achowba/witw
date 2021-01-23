import { Component } from "react";
import './Filter.css';

class Filter extends Component {
    filterChangeHandler = () => {

    }

    render () {
        return (
            <select name="region" className="Filter" onChange={this.filterChangeHandler}>
                <option value="" defaultValue>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        );
    }
}

export default Filter;

/*

import './Filter.css';

const filter = (props) => (
    <select name="region" className="Filter" onChange={(e) => props.searched}>
        <option value="" defaultValue>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
);

export default filter;


*/
