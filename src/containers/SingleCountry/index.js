import React, {Component} from 'react';

class SingleCountry extends Component {
    render() {
        return (
            <div>
                <p> Single Country - country id is {this.props.match.params.id} </p>
            </div>
        )
    }
}

export default SingleCountry;
