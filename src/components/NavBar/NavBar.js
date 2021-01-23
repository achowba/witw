import ToggleTheme from '../UI/ToggleTheme/ToggleTheme';
import classes from './Navbar.module.css';

const navBar = () => {
    return (
        <div className={classes.NavBar}>
            <a className={classes.Brand} href="/#">Where in the World?</a>
            <ToggleTheme />
        </div>
    );
}

export default navBar;

/*

<ul>
    <li>Where in the World?</li>
    <li>Dark Mode</li>
</ul>

*/
