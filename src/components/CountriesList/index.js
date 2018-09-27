import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {Grid, Row, Col, Image, Label} from 'react-bootstrap';

const CountriesListItem = ({ countries }) => (
    <Col md = {3}> 
        <Link to = {`/country/${countries.name}`}> 
            <p>
                <Label>{countries.name}</Label>
            </p>
            <Image className = ""alt = "Country flag" src = {countries.flag} responsive/> 
        </Link>
    </Col>
)

const CountriesList = (props) => {
    return (
        <Grid fluid>
        <Row>
            {props.list.map(countries => (
                <CountriesListItem countries = {countries} key = {countries.name}/>
            ))}
        </Row>
        </Grid>
    )
}

export default CountriesList;