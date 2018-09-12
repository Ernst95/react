import React from 'react';
import {Link} from 'react-router-dom';

const HomepageList = (props) => {
    return (
        <div>
            <Link to = {'/countries'}>
                <p> Countries </p> 
            </Link>
            <Link to = {'/car'}>
                <p>  Cars </p>
            </Link>
        </div>
    )
}

export default HomepageList;