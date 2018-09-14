import React, {Component} from 'react';
import HomepageList from '../../components/Home';
import Intro from '../../components/Intro';
import Splashscreen from '../../components/Splashscreen';

class Home extends Component {
    
    state = {
        home: null,
        //view: <Splashscreen />
    }

    /*componentWillMount() {
        setTimeout(() => {
        if(true) {
            this.setState({
                view: <HomepageList />
            })
        }
        }, 5000);
    }*/

    render() {
        
        const {home} = this.state;
        //const {view} = this.state;

        return (
            <div>
                <div>
                    <HomepageList />
                </div>
            </div>
        )
    }
}

export default Home;