import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

import ToggleTheme from "../../UI/ToggleTheme/ToggleTheme";

const NavBarWrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.navBg};
    box-shadow: ${props => props.theme.navShadow};
    display: flex;
    height: 60px;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 5% 0 5%;
    width: calc(100% - 10%);

    .brand {
        color: ${props => props.theme.boldText};
        font-size: 1.1rem;
        font-weight: 700;
    }
`;

const navBar = (props) => {
    return (
        <NavBarWrapper>
            <Link className="brand" to="/">
                Where in the World?
            </Link>
            <ToggleTheme toggled={props.toggled}/>
        </NavBarWrapper>
    );
};

export default withTheme(navBar);
