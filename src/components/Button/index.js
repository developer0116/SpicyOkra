import React from 'react';
import './style.scss';

const Button = (props) => {
	console.log('button', props);
	return (
		<div className={'green-button'} style={{ width: props.width, height: props.height }}>
			{props.children}
		</div>
	);
};

export default Button;
