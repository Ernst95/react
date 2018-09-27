import React from 'react';
//import {Link} from 'react-router-dom';
import './index.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

const CarsListItem = ({cars}) => (
    <Col md = {3}>
        <a href = {cars.pageURL}>
            <Image  className = "cars-list" alt = "image" src = {cars.largeImageURL} thumbnail responsive /> 
        </a>
    </Col>
)

const CarsList = (props) => {
    return (
        <Grid fluid>
            <Row>
                {props.list.hits.map(cars => (
                    <CarsListItem cars = {cars} key = {cars.id} />
                ))}
            </Row>
        </Grid>
    )
}

export default CarsList;
