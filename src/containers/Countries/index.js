import React, { Component } from 'react';
import CountriesList from '../../components/CountriesList';

class Countries extends Component {

    state = {
        countries: []
    }

   /* componentDidMount() {
        const series = ["Vikings", "Game of Thrones"];

        setTimeout(() => {
            this.setState({series: series});
        }, 2000);
    }*/

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/region/europe')
            .then(response => response.json())
            .then(json => this.setState({ countries: json}))
    }

    render() {
        return (
            <div>
                The length of countries array : {this.state.countries.length}
                <CountriesList list = {this.state.countries}/>
            </div>
        )
    }
}

export default Countries;