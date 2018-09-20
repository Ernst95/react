import React from 'react';
import './index.css';
import facebook from '../../assests/facebook.png';
import twitter from '../../assests/twitter.png';
import googlePLus from '../../assests/googlePlus.png';
import instagram from '../../assests/instagram.png';
import {Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon} from 'react-bootstrap';

const Footer = (props) => {
    return (
        // <div className = "footer">
        //     <div className = "footer-left">
        //         <p>Ernst Chapman &copy;</p>
        //     </div>
        //     <div className = "footer-right">
        //         <p> FOLLOW US ON </p>
        //         <a href = "https://twitter.com"><img alt = "twitter" src = {twitter} /></a>
        //         <a href = "https://facebook.com"><img alt = "facebook" src = {facebook} /></a>
        //         <a href = "https://instagram.com"><img alt = "instagram" src = {instagram} /></a>
        //         <a href = "https://plus.google.com/"><img alt = "google plus" src = {googlePLus} /></a>
        //     </div>
        // </div>
            <Grid fluid className = "grid">
                <Row>
                    <Col md = {3}>
                        <p> Company </p>
                        <p>
                            Don't wait for opportunities make your own opportunities
                        </p>
                    </Col>
                    <Col md = {3}>
                        <p> CONTACT US ON </p>
                        <p>
                            <Glyphicon glyph = "envelope" /> info@company.co.za
                        </p>
                        <p>
                            <Glyphicon glyph = "earphone" /> 021-7058956
                        </p>
                        <p>
                            <Glyphicon glyph = "home" /> 4 Rosemead Avenue, Kenilworth
                        </p>
                    </Col>
                    <Col md = {3} className = "col">
                        <p> FOLLOW US ON </p>
                        <a href = "https://twitter.com"><img alt = "twitter" src = {twitter} /></a>
                        <a href = "https://facebook.com"><img alt = "facebook" src = {facebook} /></a>
                        <a href = "https://instagram.com"><img alt = "instagram" src = {instagram} /></a>
                        <a href = "https://plus.google.com/"><img alt = "google plus" src = {googlePLus} /></a>
                    </Col>
                    <Col md = {3}>
                    <Form>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Sign up to subscribe</ControlLabel>{' '}
                            <FormControl type="text" placeholder="Email" />
                        </FormGroup>{' '}
                        <Button type="submit">SUBSCRIBE</Button>
                    </Form>
                    </Col>
                </Row>
            </Grid>
    )
}

export default Footer