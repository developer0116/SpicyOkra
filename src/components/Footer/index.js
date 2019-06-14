import React from 'react';
import './style.scss';
import Logo from '../../assets/img/logo.png';
const Footer = (props) => {
	const links = [ 'Solutions', 'Resources', 'Blog', 'Terms & Conditions', 'Privacy Policy', 'FAQ' ];
	return (
		<div className={'footer'}>
			<div className={'copyright'}>
				<img src={Logo} />
				<div>
					© Copyright 2018 SpicyOrka<br />Holdings Inc. All rights reserved.
				</div>
			</div>
			<div className={'links'}>
				{links.map((link) => {
					return <div className={'link'}>{link}</div>;
				})}
			</div>
		</div>
	);
};

export default Footer;
