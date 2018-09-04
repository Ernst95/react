import React, {Component} from 'react';
import Loader from '../../components/Loader';
import SingleCountryList from '../../components/SingleCountryList';

class SingleCountry extends Component {

    state = {
        country: null
    }

    componentDidMount() {

        const {id} = this.props.match.params;

        fetch(`https://restcountries.eu/rest/v2/name/${id}?fullText=true`)
            .then(response => response.json())
            .then(json => this.setState({ country: json[0]}))
    }

    render() {

        const {country} = this.state;
        console.log(country);
        
        return (
            <div>
                {
                    country === null &&
                    <Loader />
                }
                {
                    country !== null &&
                    <SingleCountryList list = {country}/>
                }
            </div>
        )
    }
}

export default SingleCountry;
