import React from 'react';
//import {Link} from 'react-router-dom';
import './index.css';

const CarsListItem = ({cars}) => (
    <a href = {cars.pageURL}>
        <img  className = "cars-list" alt = "image" src = {cars.webformatURL} /> 
    </a>
)

const CarsList = (props) => {
    return (
        <div>
            {props.list.hits.map(cars => (
                <CarsListItem cars = {cars} key = {cars.id} />
            ))}
        </div>
    )
}

export default CarsList;
