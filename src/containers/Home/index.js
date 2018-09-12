import React, {Component} from 'react';
import HomepageList from '../../components/Home';
import Intro from '../../components/Intro';

class Home extends Component {
    
    state = {
        home: null
    }

    render() {
        
        const {home} = this.state;

        return (
            <div>
                <Intro message = "Welcome" />
                <div>
                    <HomepageList />
                </div>
            </div>
        )
    }
}

export default Home;