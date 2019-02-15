import React from 'react';

const Header = props => {
    return (
        <div className="header">
        	<a href='#'>
        		<img src={props.logo_src} alt='props.logo_alter' className='logo' />
        		<h5 className='logo_text'>{props.logo_text}</h5>
        	</a>
        	<ul className='nav'>
    			<li>
        			<a href='#'>
        				{props.countries}
        			</a>
    			</li>
    			<li>
        			<a href='#'>
        				{props.airplanes}
        			</a>
    			</li>
    			<li>
        			<a href='#'>
        				{props.flights}
        			</a>
    			</li>
        	</ul>
        	<div className='login'>
        		<a href={props.login}>
        			login
        		</a>
        		<a href={props.registration}>
        			registration
        		</a>
        	</div>
        </div>
    );
};

const Sidebar = props => {
    return (
    <div className="sidebar">
        	<ul className='sidebar_list'>
        		<a href='#'>
        			<li>
        				{props.c_1}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_2}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_3}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_4}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_5}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_6}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_7}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_8}
    				</li>
    			</a>
        		<a href='#'>
        			<li>
        				{props.c_9}
        			</li>
    			</a>
        	</ul>
        </div>
    );
};

const Content = props => {
    return (
        <div className="content">
        	<ul className='flight_list'>
        		<li>
        			<h5>
        				{props.way_ticket_1}
        			</h5>
        			<p>
        				Number of flight: {props.number_ticket_1}
        				Price: {props.price_ticket_1}
        				Date: {props.date_ticket_1}
        			</p>
        			<a href='{props.buy_href}'>
        				{props.buy}
        			</a>
        		</li>
        	</ul>
        </div>
    );
};

export { Header, Sidebar, Content };