import classes from "./SearchBar.module.css";

const searchBar = (props) => (
    <input
        className={classes.SearchBar}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => props.searched(e)}
        value={props.searchTerm}
    />
);

export default searchBar;
