import React from 'react';
import './index.css';

const CountriesListItem = ({ countries }) => (
    <li> 
        {countries.name}
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