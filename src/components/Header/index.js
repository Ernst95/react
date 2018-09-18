import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
        <Navbar fluid>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
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
    )
}

export default Header

