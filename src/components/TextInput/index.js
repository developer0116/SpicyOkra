import React from 'react';
import './style.scss';

const TextInput = (props) => {
	return (
		<div className={'input-text'}>
			<input type={props.type} placeholder={props.placeholder} />
		</div>
	);
};

export default TextInput;
