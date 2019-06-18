import React from 'react';
import './style.scss';

import PlusIcon from '../../assets/img/plus-icon.png';
const Button = (props) => {
	console.log('button', props);
	if (props.type == 'red') {
		return (
			<div className={'red dashboard-button'} style={{ width: props.width, height: props.height }}>
				{props.children}
			</div>
		);
	} else if (props.type == 'green') {
		return (
			<div className={'green dashboard-button'} style={{ width: props.width, height: props.height }}>
				{props.children}
			</div>
		);
	} else if (props.type == 'gray') {
		return (
			<div className={'gray dashboard-button'} style={{ width: props.width, height: props.height }}>
				<div className={'gray-img'}>
					<img src={PlusIcon} />
				</div>
				<div className={'gray-text'}>{props.children}</div>
			</div>
		);
	} else {
		return (
			<div className={'submit-button'} style={{ width: props.width, height: props.height }}>
				{props.children}
			</div>
		);
	}
};

export default Button;
