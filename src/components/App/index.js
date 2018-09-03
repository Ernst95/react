import React, { Component } from 'react';
import Intro from '../Intro';
import Countries from '../../containers/Countries';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Countries List</h1>
            </header>
            <Intro message = "Here you can find all your most loved countries"/>
            <Countries />
        </div>
        );
    }
}

export default App;
