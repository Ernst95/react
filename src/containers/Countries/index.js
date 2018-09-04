import React, { Component } from 'react';
import CountriesList from '../../components/CountriesList';

class Countries extends Component {

    state = {
        countries: [],
        countriesName: '',
        isFetching: false, 
        error: null
    }

   /* componentDidMount() {
        const series = ["Vikings", "Game of Thrones"];

        setTimeout(() => {
            this.setState({series: series});
        }, 2000);
    }*/

    /*componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/region/europe')
            .then(response => response.json())
            .then(json => this.setState({ countries: json}))
    }*/

    /*onCountriesInputChange = e => {
        console.log(e);
        console.log(e.target.value);
    }*/

    onCountriesInputChange = e => {

        this.setState({ countriesName: e.target.value, isFetching: true });

        fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(json => this.setState({ countries: json, isFetching: false }))
            .catch(error => this.setState({ error, countries: [], isFetching: false }));
    }

    render() {

        const { countries, countriesName, isFetching, error } = this.state;

        return (
            <div>
                <div> 
                    <input value = {countriesName} type = "text" onChange = {this.onCountriesInputChange} />
                </div>
                {
                    !isFetching && countries.length === 0 && countriesName.trim() === '' &&
                    <p> Please enter countries name into the input </p>
                }
                {
                    !isFetching && countries.length === 0 && countriesName.trim() !== '' && error &&
                    <p> No countries have been found with this name</p>
                }
                {
                    isFetching && 
                    <p> Loading...</p>
                }
                {
                    !isFetching &&
                    <CountriesList list = {this.state.countries}/>
                }
            </div>
        )
    }
}

export default Countries;