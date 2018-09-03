import React from 'react';
import './index.css';

const CountriesList = (props) => {
    return (
        <div>
            <ul className = "countries-list"> 
                {props.list.map(countries => (
                    <li key = {countries.name}> 
                        {countries.name} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CountriesList;