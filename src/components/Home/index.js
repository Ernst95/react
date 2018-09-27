import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const HomepageList = (props) => {
    return (
        <div>
            <Link to = {'/countries'}>
                <Button bsStyle="success">Success</Button>
            </Link>
            <Link to = {'/car'}>
                <p>  Cars </p>
            </Link>
        </div>
    )
}

export default HomepageList;