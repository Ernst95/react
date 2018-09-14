import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <Link to = {'/'}>
                <a class="logo">CompanyLogo</a>
            </Link>
            <div class="header-right">
                <Link to = {'/'}>
                    <a>Home</a>
                </Link>
                <Link to = {'/countries'}>
                    <a>Contact</a>
                </Link>
                <Link to = {'#'}>
                    <a>About</a>
                </Link>           
            </div>
        </div>
    )
}

export default Header

