import styled from "styled-components";

const FilterWrapper = styled.select`
    background-color: ${props => props.theme.navBg};
    border: 1px solid transparent;
    color: ${props => props.theme.boldText};
    cursor: pointer;
    font-size: 0.9rem;
    height: 47px;
    padding: 0 10px;

    &:active,
    &:focus {
        border: 1px solid #eaeaea;
        outline: none;
    }

    & > option:first-child {
        color: ${props => props.theme.boldText};
    }

    & > option {
        background-color: ${props => props.theme.navBg};
        padding: 10px;
    }
`;

const filter = (props) => (
    <FilterWrapper name="region" className="Filter" onChange={props.filtered}>
        <option value="" defaultValue>
            Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </FilterWrapper>
);

export default filter;
