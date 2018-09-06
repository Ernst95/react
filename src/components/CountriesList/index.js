import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const CountriesListItem = ({ countries }) => (
    <div> 
        <Link to = {`/country/${countries.name}`}> 
            <p> {countries.name} </p>
            <img style = {{width: 250}} alt = "Country flag" src = {countries.flag} /> 
        </Link>
    </div>
)

const CountriesList = (props) => {
    return (
        <div className = "countries-list">
            {props.list.map(countries => (
                <CountriesListItem countries = {countries} key = {countries.name}/>
            ))}
        </div>
    )
}

export default CountriesList;