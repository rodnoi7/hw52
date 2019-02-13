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
        		<li>
        			<a href='#'>
        				Air New Zealand
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Atlantic Airlines
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Aurigny Air Services
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Blue Islands
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Flybe
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				AirBaltic
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Bulgaria Air
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Austrian Airlines
        			</a>
        		</li>
        		<li>
        			<a href='#'>
        				Белавиа
        			</a>
        		</li>
        	</ul>
        </div>
    );
};

export default Header;
export default Sidebar;