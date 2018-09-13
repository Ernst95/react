import React from 'react';
import {Link} from 'react-router-dom';

const HomepageList = (props) => {
    return (
        <div>
            <Link to = {'/countries'}>
                <button> Countries </button> 
            </Link>
            <Link to = {'/car'}>
                <p>  Cars </p>
            </Link>
        </div>
    )
}

export default HomepageList;