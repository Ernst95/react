import React from 'react';
//import {Link} from 'react-router-dom';
import './index.css';
import {Grid, Row, Col} from 'react-bootstrap';

const CarsListItem = ({cars}) => (
    <Col sm = {4}>
        <a href = {cars.pageURL}>
            <img  className = "cars-list" alt = "image" src = {cars.userImageURL} /> 
        </a>
    </Col>
)

const CarsList = (props) => {
    return (
        <Grid>
            <Row>
                {props.list.hits.map(cars => (
                    <CarsListItem cars = {cars} key = {cars.id} />
                ))}
            </Row>
        </Grid>
    )
}

export default CarsList;
