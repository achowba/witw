import './Filter.css';

const filter = (props) => (
    <select name="region" className="Filter" onChange={props.filtered}>
        <option value="" defaultValue>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
);

export default filter;
