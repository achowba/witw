import { Link } from 'react-router-dom';
import ToggleTheme from '../../UI/ToggleTheme/ToggleTheme';
import classes from './Navbar.module.css';

const navBar = () => {
    return (
        <div className={classes.NavBar}>
            <Link className={classes.Brand} to="/">Where in the World?</Link>
            <ToggleTheme />
        </div>
    );
}

export default navBar;
