import React, { Component } from 'react';
import Main from '../../components/Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Functions</h1>
            </header>
            <Main />
            <footer className="App-footer">
                
            </footer>
        </div>
        );
    }
}

export default App;
