import React from 'react';
import loaderSrc from '../../assests/loader.gif';

const Loader = (props) => (
    <div>
        <img style = {{width: 250}} alt = "loader icon" src = {loaderSrc} />
    </div>
);

export default Loader