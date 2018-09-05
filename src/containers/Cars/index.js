import React, {Component} from 'react';
import CarsList from '../../components/CarsList';

class Cars extends Component {

    state = {
        cars: []
    }

    componentDidMount() {
        fetch('https://pixabay.com/api/?key=10024212-68b0938d98269227c1937f839&q=yellow+flowers&image_type=photo')
            .then(response => response.json())
            .then(json => this.setState({cars: json}))
    }

    render() {
        const {cars} = this.state;

        console.log(cars);

        return (
            <div>
                {
                    cars.length !== 0 &&
                    <CarsList list = {cars} />
                }
            </div>
        )
    }
}

export default Cars;
