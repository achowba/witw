import styled from "styled-components";

const SearchInput = styled.input`
    background-color: ${props => props.theme.navBg};
    box-shadow: ${props => props.theme.searchShadow};
    border: 1px solid transparent;
    border-radius: 2px;
    color: ${props => props.theme.boldText};
    font-size: 1rem;
    font-weight: 100;
    height: 35px;
    outline: none;
    padding: 5px 10px 5px 15px;
    width: 100%;
    max-width: 450px;

    ::placeholder {
        color: ${props => props.theme.boldText};
        font-weight: 100;
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: #878787;
        font-weight: 100;
    }

    ::-ms-input-placeholder {
        color: #878787;
        font-weight: 100;
    }

    @media (max-width: 700px) {
        margin-bottom: 20px;
        max-width: 340px;
    }
`;

const searchBar = (props) => (
    <SearchInput
        type="text"
        placeholder="Search for a country by name or capital..."
        onChange={(e) => props.searched(e)}
        value={props.searchTerm}
    />
);

export default searchBar;
