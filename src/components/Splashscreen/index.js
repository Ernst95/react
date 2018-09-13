import React from 'react';
import splashscreenSrc from '../../assests/splashscreen.gif';
import './index.css';

const Splashscreen = (props) => (
    <div className = "splashscreen">
        <img alt = "splashscreen icon" src = {splashscreenSrc} />
    </div>
);

export default Splashscreen;