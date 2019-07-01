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
			icon: DashboardIcon,
			url: '/dashboard'
		},
		{
			name: 'Deals',
			icon: DealsIcon,
			url: '/deals'
		},
		{
			name: 'Experiences',
			icon: ExperiencesIcon,
			url: '/experiences'
		},
		{
			name: 'Account Settings',
			icon: SettingsIcon,
			url: '/settings'
		},
		{
			name: 'Support',
			icon: SupportIcon,
			url: '/support'
		}
	];
	return (
		<div className={'navbar'}>
			<div>
				<a href="/">
					<div className={'navbar-logo'}>
						<img src={Logo} />
					</div>
				</a>

				<div className={'navbar-content'}>
					{links.map((link) => {
						return (
							<a href={link.url}>
								<div
									className={
										props.current === link.name ? 'navbar-link navbar-link-active' : 'navbar-link'
									}
								>
									<img src={link.icon} />
									<div>{link.name}</div>
								</div>
							</a>
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
