import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Countries from '../../containers/Countries';
import SingleCountry from '../../containers/SingleCountry';

const Main = (props) => (
    <Switch> 
        <Route exact path = "/" component = {Countries} />
        <Route exact path = "/country/:id" component = {SingleCountry} />
    </Switch>
);

export default Main;