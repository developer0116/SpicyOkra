import React from 'react';
import './style.scss';
import Logo from '../../assets/img/logo.png';
import Cook from '../../assets/img/home_icon_0.png';
const Topbar = (props) => {
	const buttonNames = [ 'Home', 'About Us', 'Sign In' ];
	return (
		<div className={'top-bar'}>
			<div className={'logo-panel'}>
				<img src={Logo} />
			</div>
			<div className={'button-panel'}>
				{buttonNames.map((element) => {
					return <div className={'top-button'}>{element}</div>;
				})}
				<div className={'get-started'}>
					<img src={Cook} />
					<div>GET STARTED</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
