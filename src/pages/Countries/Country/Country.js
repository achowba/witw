import styled from "styled-components";

const CountryWrapper = styled.div`
    background-color: ${props => props.theme.bodyBg};
    border-radius: 5px;
    cursor: pointer;

    .__card {
        border-radius: 0 0 5px 5px;
        box-shadow: ${props => props.theme.cardShadow};
        max-height: 140px;
        overflow: hidden;
        padding: 20px 20px 40px 20px;
    }

    .__flag {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 200px;
        width: 100%;
    }

    .__info {
        color: ${props => props.theme.boldText};
        font-size: 0.9rem;
        margin: 0 0 10px 0;
    }

    .__info > b {
        color: ${props => props.theme.boldText};
    }

    .__name {
        color: ${props => props.theme.boldText};
        font-size: 1.1rem;
        margin: 0 0 25px 0;
    }
`;

const country = (props) => (
    <CountryWrapper>
        <div
            className="__flag"
            style={{ backgroundImage: `url(${props.flag})` }}
            alt=""
        ></div>
        <article className="__card">
            <h4 className="__name">{props.name}</h4>
            <p className="__info">
                <b>Population:</b>{" "}
                {props.population.toLocaleString("en", { useGrouping: true })}
            </p>
            <p className="__info">
                <b>Region:</b> {props.region}
            </p>
            <p className="__info">
                <b>Capital:</b> {props.capital}
            </p>
        </article>
    </CountryWrapper>
);

export default country;
