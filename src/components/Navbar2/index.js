import React from 'react';
import './style.scss';
import Logo from '../../assets/img/mark.png';
import DashboardIcon from '../../assets/img/dashboard-icon.png';
import DealsIcon from '../../assets/img/deals-icon.png';
import ExperiencesIcon from '../../assets/img/experiences-icon.png';
import SettingsIcon from '../../assets/img/settings-icon.png';
import SupportIcon from '../../assets/img/support-icon.png';
import UserIcon from '../../assets/img/user-icon.png';
import BoilIcon from '../../assets/img/boil-white-icon.png';
import LockIcon from '../../assets/img/lock-icon.png';
import PrivacyIcon from '../../assets/img/privacy-icon.png';
import PencilIcon from '../../assets/img/pencil-icon.png';
import PowerIcon from '../../assets/img/power-icon.png';

const Navbar2 = (props) => {
	const leftIcons = [ DashboardIcon, DealsIcon, ExperiencesIcon, SettingsIcon, SupportIcon ];
	const links = [
		{
			name: 'User Profile',
			icon: UserIcon
		},
		{
			name: 'Restaurant Information',
			icon: BoilIcon
		},
		{
			name: 'Change Password',
			icon: LockIcon
		},
		{
			name: 'Privacy Policy',
			icon: PrivacyIcon
		},
		{
			name: 'Terms and Conditions',
			icon: PencilIcon
		}
	];
	return (
		<div className={'navbar2'}>
			<div className={'navbar2-left'}>
				<div className={'navbar2-logo'}>
					<img src={Logo} />
				</div>
				<div className={'navbar2-left-content'}>
					{leftIcons.map((icon, index) => {
						return (
							<div
								className={
									index === 3 ? 'navbar2-left-link navbar2-left-link-active' : 'navbar2-left-link'
								}
							>
								<img src={icon} />
							</div>
						);
					})}
				</div>
			</div>
			<div className={'navbar2-right'}>
				<div className={'navbar2-right-content'}>
					{links.map((link) => {
						return (
							<div
								className={
									link.name === props.current ? (
										'navbar2-right-link navbar2-right-link-active'
									) : (
										'navbar2-right-link'
									)
								}
							>
								<img src={link.icon} />
								<div className={'navbar2-right-link-text'}>{link.name}</div>
							</div>
						);
					})}
				</div>
				<div className={'logout-button'}>
					<img src={PowerIcon} />
					<div className={'logout-button-text'}>LOG OUT</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar2;
