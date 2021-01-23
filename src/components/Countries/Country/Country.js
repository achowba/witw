import classes from './Country.module.css';

const country = (props) => (
    <div className={classes.Country}>
        {/* <img className={classes.Flag} src={props.flag} alt="" /> */}
        <div className={classes.Flag} style={{backgroundImage: `url(${props.flag})`}} alt=""></div>
        <article className={classes.Card}>
            <h4 className={classes.Name}>{props.name}</h4>
            <p className={classes.Info}><b>Population:</b> {props.population.toLocaleString('en', {useGrouping:true})}</p>
            <p className={classes.Info}><b>Region:</b> {props.region}</p>
            <p className={classes.Info}><b>Capital:</b> {props.capital}</p>
        </article>
    </div>
);

export default country;
