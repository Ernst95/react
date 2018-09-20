import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Button, Grid, Col, Row} from 'react-bootstrap';
import Banner1 from '../../assests/banner1.png';
import Banner2 from '../../assests/banner2.png';
import Banner3 from '../../assests/banner3.png';
import Banner4 from '../../assests/banner4.png';

const Header = (props) => {
    return (
        // <div className="header">
        //     <Link to = {'/'}>
        //         <a className="logo">CompanyLogo</a>
        //     </Link>
        //     <div className="header-right">
        //         <Link to = {'/'}>
        //             <a>Home</a>
        //         </Link>
        //         <Link to = {'/countries'}>
        //             <a>Contact</a>
        //         </Link>
        //         <Link to = {'#'}>
        //             <a>About</a>
        //         </Link>           
        //     </div>
        // </div>
        <Grid fluid>
            <Row>
                <Col md = {12}>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <Link to = {'/'}>
                                <a className="logo">CompanyLogo</a>
                            </Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                            Link
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                            Link
                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col md = {12}>
                    <Carousel>
                        <Carousel.Item className = "carousel">
                            <img alt = "1920x250" src = {Banner1} />
                            <Carousel.Caption>
                                <Link to = {'/'}>
                                    <Button bsStyle="success">Success</Button>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className = "carousel">
                            <img alt = "1920x250" src = {Banner2} />
                            <Carousel.Caption>
                                <Link to = {'/countries'}>
                                    <Button bsStyle="danger">Danger</Button>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Grid>
    )
}

export default Header

