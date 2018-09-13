import React, { Component } from 'react';
import Main from '../../components/Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

    render() {
        return (
        <div className="Test">
                <header className = "footer">HEADER</header>
                <div className="App">
                    <div className="main">
                        <Main />
                    </div>
                </div>
                <footer className = "footer">FOOTER</footer>
        </div>
        );
    }
}

export default App;
