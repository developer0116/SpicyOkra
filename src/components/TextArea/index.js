import React from 'react';
import './style.scss';

const TextArea = (props) => {
	return (
		<div className={'text-area'} style={{ fontSize: props.fontSize || 15 }}>
			<textarea placeholder={props.placeholder} />
		</div>
	);
};

export default TextArea;
