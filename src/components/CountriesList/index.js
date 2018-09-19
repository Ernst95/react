import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

const CountriesListItem = ({ countries }) => (
    <Col md = {4}> 
        <Link to = {`/country/${countries.name}`}> 
            <p> {countries.name} </p>
            <img className = "image" alt = "Country flag" src = {countries.flag} /> 
        </Link>
    </Col>
)

const CountriesList = (props) => {
    return (
        <Grid>
        <Row>
            {props.list.map(countries => (
                <CountriesListItem countries = {countries} key = {countries.name}/>
            ))}
        </Row>
        </Grid>
    )
}

export default CountriesList;