import React, {Component} from 'react';
import './App.css';
import { Header, Sidebar, Content} from './hw52/airline';
import logo from './logo.png'

class App extends Component {
    state = {
        navbar: [
            {logo_src: logo},
            {logo_alt: 'AirGram'},
            {logo_text: 'AirGram Airline'},
            {href: '#'}
        ],
        nav_links: [
            {countries: 'Countries'},
            {airplanes: 'Airplanes'},
            {flights: 'Flights'},
            {login: '#'},
            {registration: '#'},
        ],
        airline_list: [
            {new_zealand: 'Air New Zealand'},
            {atlantic: 'Atlantic Airlines'},
            {aurigny: 'Aurigny Air Services'},
            {islands: 'Blue Islands'},
            {flybe: 'Flybe'},
            {baltic: 'AirBaltic'},
            {bulgaria: 'Bulgaria Air'},
            {austrian: 'Austrian Airlines'},
            {belavia: 'Белавия'}
        ],
        tickets_info: [
            {direction: [
                {paris_london: 'Paris-London'},
                {moscow_berlin: 'Moscow-Berlin'},
                {bishkek_moscow: 'Bishkek-Moscow'},
                {pekin_moscow: 'Pekin-Moscow'},
                {almaty_bishkek: 'Almaty-Bishkek'},
                {newyork_washington: 'New York-Washington'}
                ]},
            {number: [
                {paris_london: '№25'},
                {moscow_berlin: '№13'},
                {bishkek_moscow: '№5'},
                {pekin_moscow: '№9'},
                {almaty_bishkek: '№12'},
                {newyork_washington: '№21'}
                ]},
            {price: [
                {paris_london: '1200'},
                {moscow_berlin: '5000'},
                {bishkek_moscow: '900'},
                {pekin_moscow: '1100'},
                {almaty_bishkek: '500'},
                {newyork_washington: '2000'}                
                ]},
            {date: [
                {paris_london: '12.03.2019'},
                {moscow_berlin: '20.02.2019'},
                {bishkek_moscow: '10.03.2019'},
                {pekin_moscow: '30.06.2020'},
                {almaty_bishkek: '04.03.2019'},
                {newyork_washington: '02.04.2019'}  
                ]},
            {buy: [
                    {buy: 'Buy ticket'},
                    {href: '#'}
                ]}
        ]
    }
    render() {
        return (
            <div className="App">
                <Header logo_src={this.state.navbar[0].logo_src} logo_alt={this.state.navbar[1].logo_alter} logo_text={this.state.navbar[2].logo_text} 
                    countries={this.state.nav_links[0].countries} airplanes={this.state.nav_links[1].airplanes} flights={this.state.nav_links[2].flights} 
                    login={this.state.nav_links[3].login} registration={this.state.nav_links[4].registration} />
                <Sidebar c_1={this.state.airline_list[0].new_zealand} c_2={this.state.airline_list[1].atlantic} c_3={this.state.airline_list[2].aurigny} 
                    c_4={this.state.airline_list[3].islands} c_5={this.state.airline_list[4].flybe} c_6={this.state.airline_list[5].baltic} 
                    c_7={this.state.airline_list[6].bulgaria} c_8={this.state.airline_list[7].austrian} c_9={this.state.airline_list[8].belavia} />
                <Content way_ticket_1={this.state.tickets_info[0][0].paris_london} number_ticket_1={this.state.tickets_info[2][0].paris_london} 
                    price_ticket_1={this.state.tickets_info[2][0].paris_london} date_ticket_1={this.state.tickets_info[3][0].paris_london} 
                    buy={this.state.tickets_info[4][0].buy} buy_href={this.state.tickets_info[4][0].href} />
            </div>
        );
    }
}

export default App;

