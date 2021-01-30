import styled from "styled-components";
import arrow from '../../../assets/img/left-arrow.svg';

const Button = styled.button`
    align-items: center;
    background: white;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 20px 2px #ececec;
    color: #333333;
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

const back = ({ history }) => (
    <Button onClick={history.goBack}>
        <img src={arrow} alt=""/>
        Back
    </Button>
);

export default back;
