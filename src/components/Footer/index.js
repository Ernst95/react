import React from 'react';
import './index.css';
import facebook from '../../assests/facebook.png';
import twitter from '../../assests/twitter.png';
import googlePLus from '../../assests/googlePlus.png';
import instagram from '../../assests/instagram.png';

const Footer = (props) => {
    return (
        <div className = "footer">
            <div className = "footer-left">
                <p>Ernst Chapman &copy;</p>
            </div>
            <div className = "footer-right">
                <p> FOLLOW US ON </p>
                <a href = "https://twitter.com"><img alt = "twitter" src = {twitter} /></a>
                <a href = "https://facebook.com"><img alt = "facebook" src = {facebook} /></a>
                <a href = "https://instagram.com"><img alt = "instagram" src = {instagram} /></a>
                <a href = "https://plus.google.com/"><img alt = "google plus" src = {googlePLus} /></a>
            </div>
        </div>
    )
}

export default Footer