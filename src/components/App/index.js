import React, { Component } from 'react';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './App.css';
import 'whatwg-fetch';
import Splashscreen from '../Splashscreen';

class App extends Component {

    state = {
        renderSplashscreen: true
    }

    componentWillMount() {
        setTimeout(() => {
        if(true) {
            this.setState({
                renderSplashscreen: false
            })
        }
        }, 3000);
    }

    render() {

        const {renderSplashscreen} = this.state;

        return (
        <div className="main">
                {
                    renderSplashscreen &&
                    <div className = "splashscreen">
                        <Splashscreen />
                    </div>
                }
                {
                    !renderSplashscreen &&
                    <div className="body">
                        <Header />
                        <div className="App">
                            <Main />
                        </div>
                        <Footer />
                    </div>
                }
        </div>
        );
    }
}

export default App;
