import React, {Component} from 'react';
import './App.css';
import Header from './hw52/airline';
import logo from './logo.png'

class App extends Component {
    state = {
        navbar: [
            {logo_src: logo},
            {logo_alt: 'AirGram'},
            {logo_text: 'AirGram Airline'}
        ],
        nav_links: [
            {countries: 'Countries'},
            {airplanes: 'Airplanes'},
            {flights: 'Flights'},
            {login: '#'},
            {registration: '#'},
        ]
    }
    render() {
        return (
            <div className="App">
                <Header logo_src={this.state.navbar[0].logo_src} logo_alt={this.state.navbar[1].logo_alter} logo_text={this.state.navbar[2].logo_text} 
                countries={this.state.nav_links[0].countries} airplanes={this.state.nav_links[1].airplanes} flights={this.state.nav_links[2].flights} 
                login={this.state.nav_links[3].login} registration={this.state.nav_links[4].registration} />
            </div>
        );
    }
}

export default App;

