import { withRouter } from "react-router";
import styled from "styled-components";

import arrow from '../../../assets/img/left-arrow.svg';

const Button = styled.button`
    align-items: center;
    background-color: ${props => props.theme.navBg};
    border: none;
    border-radius: 3px;
    box-shadow: ${props => props.theme.searchShadow};
    color: ${props => props.theme.boldText};
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    justify-content: space-between;
    margin: 0 0 0 5%;
    max-width: 120px;
    outline: none;
    padding: 10px 30px;
    width: 100%;

    & > img {
        margin: 0 10px 0 -5px;
        width: 25px;
    }
`;

const back = (props) => {
    const goBack = () => {
        props.history.push('/');
    }

    return (
        <Button onClick={goBack}>
            <img src={arrow} alt="Back Button"/>
            Back
        </Button>
    );
}

export default withRouter(back);
