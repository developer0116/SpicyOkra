import React from 'react';
import './style.scss';

const UserAvatar = (props) => {
	return (
		<div className={'user-avatar'}>
			<img className={'user-avatar-img'} src={props.avatar} />
			<div>{props.name}</div>
		</div>
	);
};

export default UserAvatar;
