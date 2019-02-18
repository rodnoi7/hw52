import React, {Component} from 'react';
import './App.css';
import { Header, Sidebar, Content, Footer} from './hw52/airline';
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
                {way: 'Paris-London', num: '№25', price: '13000', date: '20.02.2019'},
                {way: 'Moscow-Berlin', num: '№13', price: '15000', date: '18.02.2019'},
                {way: 'Bishkek-Moscow', num: '№3', price: '1300', date: '28.02.2019'},
                {way: 'Pekin-Moscow', num: '№19', price: '1000', date: '20.05.2019'},
                {way: 'Almaty-Bishkek', num: '№16', price: '3300', date: '25.02.2019'},
                {way: 'New York-Washington', num: '№19', price: '21000', date: '30.06.2019'},
                {buy: 'Buy ticket', href: '#'}
        ],
        footer_info: [
            {
                about_page: 'About us', 
                regulations: 'Regulations', 
                help: 'Help', 
                advertising: 'Advertising', 
                contacts: 'Contacts', 
                href: '#',
                register: 'AirGram ® is a registered Trademark',
                register_2: 'Copyright © 2019 AirGram',
                map: 'Map of page'
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <Header 
                    logo_src={this.state.navbar[0].logo_src} logo_alt={this.state.navbar[1].logo_alter} logo_text={this.state.navbar[2].logo_text} 
                    countries={this.state.nav_links[0].countries} airplanes={this.state.nav_links[1].airplanes} flights={this.state.nav_links[2].flights} 
                    login={this.state.nav_links[3].login} registration={this.state.nav_links[4].registration} />

                <Sidebar 
                    c_1={this.state.airline_list[0].new_zealand} c_2={this.state.airline_list[1].atlantic} c_3={this.state.airline_list[2].aurigny} 
                    c_4={this.state.airline_list[3].islands} c_5={this.state.airline_list[4].flybe} c_6={this.state.airline_list[5].baltic} 
                    c_7={this.state.airline_list[6].bulgaria} c_8={this.state.airline_list[7].austrian} c_9={this.state.airline_list[8].belavia} 
                    href={this.state.navbar[0].href} />
                    
                <Content 
                    way_ticket_1={this.state.tickets_info[0].way} num_ticket_1={this.state.tickets_info[0].num} price_ticket_1={this.state.tickets_info[0].price} date_ticket_1={this.state.tickets_info[0].date}
                    way_ticket_2={this.state.tickets_info[1].way} num_ticket_2={this.state.tickets_info[1].num} price_ticket_2={this.state.tickets_info[1].price} date_ticket_2={this.state.tickets_info[1].date}
                    way_ticket_3={this.state.tickets_info[2].way} num_ticket_3={this.state.tickets_info[2].num} price_ticket_3={this.state.tickets_info[2].price} date_ticket_3={this.state.tickets_info[2].date}
                    way_ticket_4={this.state.tickets_info[3].way} num_ticket_4={this.state.tickets_info[3].num} price_ticket_4={this.state.tickets_info[3].price} date_ticket_4={this.state.tickets_info[3].date}
                    way_ticket_5={this.state.tickets_info[4].way} num_ticket_5={this.state.tickets_info[4].num} price_ticket_5={this.state.tickets_info[4].price} date_ticket_5={this.state.tickets_info[4].date}
                    way_ticket_6={this.state.tickets_info[5].way} num_ticket_6={this.state.tickets_info[5].num} price_ticket_6={this.state.tickets_info[5].price} date_ticket_6={this.state.tickets_info[5].date} 
                    buy={this.state.tickets_info[6].buy} href={this.state.tickets_info[6].href} />

                <Footer 
                    about_site={this.state.footer_info[0].about_page} regul={this.state.footer_info[0].regulations} help={this.state.footer_info[0].help} 
                    advertising={this.state.footer_info[0].advertising} contacts={this.state.footer_info[0].contacts} href={this.state.footer_info[0].href} 
                    copyright_1={this.state.footer_info[0].register} copyright_2={this.state.footer_info[0].register_2} map={this.state.footer_info[0].map} />
            </div>
        );
    }
}

export default App;

