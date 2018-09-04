import React from 'react';

const SingleCountryList = (props) => {
    return (
        <div> 
            <p> {props.list.name} </p> 
            <p>
                <img style = {{width: 250}} alt = "Country flag" src = {props.list.flag} /> 
            </p>
            <p> {props.list.capital} </p> 
            <p> {props.list.region} </p> 
            <p> {props.list.population} </p> 
            <p> {props.list.languages[0].name} </p> 
            <p> {props.list.currencies[0].name} </p>
        </div>
    )
}


export default SingleCountryList;