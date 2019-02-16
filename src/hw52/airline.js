import React from 'react';

const Header = props => {
    return (
        <div className="header">
        	<a href='props.href'>
        		<img src={props.logo_src} alt='props.logo_alter' className='logo' />
        		<h5 className='logo_text'>{props.logo_text}</h5>
        	</a>
        	<ul className='nav'>
    			<li>
        			<a href='props.href'>
        				{props.countries}
        			</a>
    			</li>
    			<li>
        			<a href='props.href'>
        				{props.airplanes}
        			</a>
    			</li>
    			<li>
        			<a href='props.href'>
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
        		<a href='props.href'>
        			<li>
        				{props.c_1}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_2}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_3}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_4}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_5}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_6}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_7}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_8}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_9}
        			</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_6}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_7}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_8}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_9}
        			</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_6}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_7}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_8}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_9}
        			</li>
    			</a>
    			<a href='props.href'>
        			<li>
        				{props.c_1}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_2}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_3}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_4}
    				</li>
    			</a>
        		<a href='props.href'>
        			<li>
        				{props.c_5}
    				</li>
    			</a>
        	</ul>
        </div>
    );
};

const Content = props => {
    return (
        <div className="content">
        	<div className='card_list'>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_1}</h3>
		        	<h4>Ticket {props.num_ticket_1}</h4>
		        	<h4>Price: {props.price_ticket_1}</h4>
		        	<h4>Date: {props.date_ticket_1}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_2}</h3>
		        	<h4>Ticket {props.num_ticket_2}</h4>
		        	<h4>Price: {props.price_ticket_2}</h4>
		        	<h4>Date: {props.date_ticket_2}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_3}</h3>
		        	<h4>Ticket {props.num_ticket_3}</h4>
		        	<h4>Price: {props.price_ticket_3}</h4>
		        	<h4>Date: {props.date_ticket_3}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_4}</h3>
		        	<h4>Ticket {props.num_ticket_4}</h4>
		        	<h4>Price: {props.price_ticket_4}</h4>
		        	<h4>Date: {props.date_ticket_4}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_5}</h3>
		        	<h4>Ticket {props.num_ticket_5}</h4>
		        	<h4>Price: {props.price_ticket_5}</h4>
		        	<h4>Date: {props.date_ticket_5}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
	        	<div className='ticket_card'>
		        	<h3>Way: {props.way_ticket_6}</h3>
		        	<h4>Ticket {props.num_ticket_6}</h4>
		        	<h4>Price: {props.price_ticket_6}</h4>
		        	<h4>Date: {props.date_ticket_6}</h4>
		        	<a href={props.href} className='buy_button'>
		        		{props.buy}
		        	</a>
		        </div>
		    </div>
        </div>
    );
};

const Footer = props => {
    return (
        <div className="footer">
        	
        </div>
    );
};

export { Header, Sidebar, Content };