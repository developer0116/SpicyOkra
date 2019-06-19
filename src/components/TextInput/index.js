import React from 'react';
import './style.scss';

const TextInput = (props) => {
	return (
		<div className={'input-text'}>
			<input type={props.type} style={{ fontSize: props.fontSize || 15 }} placeholder={props.placeholder} />
		</div>
	);
};

export default TextInput;
