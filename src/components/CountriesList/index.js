import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const CountriesListItem = ({ countries }) => (
    <li> 
        <Link to = {`/country/${countries.name}`}> 
            {countries.name}
        </Link>
    </li>
)

const CountriesList = (props) => {
    return (
        <div>
            <ul className = "countries-list"> 
                {props.list.map(countries => (
                    <CountriesListItem countries = {countries} key = {countries.name}/>
                ))}
            </ul>
        </div>
    )
}

export default CountriesList;