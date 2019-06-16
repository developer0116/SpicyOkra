import React from 'react';
import './style.scss';
import Logo from '../../assets/img/dashboard-logo.png';
const Navbar = (props) => {
	const links = [ 'Dashboard', 'Deals', 'Experiences', 'Account Settings', 'Support' ];
	return (
		<div className={'navbar'}>
			<div>
				<img src={Logo} />
				<img />
			</div>
			<div>
				<img />
				<span>Dashboard</span>
			</div>
		</div>
	);
};

export default Navbar;
