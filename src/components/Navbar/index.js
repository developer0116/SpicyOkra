import React from 'react';
import './style.scss';
import Logo from '../../assets/img/dashboard-logo.png';
import DashboardIcon from '../../assets/img/dashboard-icon.png';
import DealsIcon from '../../assets/img/deals-icon.png';
import ExperiencesIcon from '../../assets/img/experiences-icon.png';
import SettingsIcon from '../../assets/img/settings-icon.png';
import SupportIcon from '../../assets/img/support-icon.png';
const Navbar = (props) => {
	const links = [
		{
			name: 'Dashboard',
			icon: DashboardIcon
		},
		{
			name: 'Deals',
			icon: DealsIcon
		},
		{
			name: 'Experiences',
			icon: ExperiencesIcon
		},
		{
			name: 'Account Settings',
			icon: SettingsIcon
		},
		{
			name: 'Support',
			icon: SupportIcon
		}
	];
	return (
		<div className={'navbar'}>
			<div>
				<div className={'navbar-logo'}>
					<img src={Logo} />
				</div>
				<div className={'navbar-content'}>
					{links.map((link) => {
						return (
							<div
								className={
									props.current === link.name ? 'navbar-link navbar-link-active' : 'navbar-link'
								}
							>
								<img src={link.icon} />
								<div>{link.name}</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className={'copyright'}>
				@ Copyright 2018 SpicyOkra <br />
				Holdings Inc. All rights reserved.
			</div>
		</div>
	);
};

export default Navbar;
