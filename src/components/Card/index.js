import React from 'react';
import './style.scss';

import TimesIcon from '../../assets/img/dashboard-times-icon.png';
import RedeemedIcon from '../../assets/img/dashboard-redeemed-icon.png';
import ClickedIcon from '../../assets/img/dashboard-clicked-icon.png';
import UsersIcon from '../../assets/img/dashboard-users-icon.png';
import RatingIcon from '../../assets/img/dashboard-rating-icon.png';
import ReviewsIcon from '../../assets/img/dashboard-reviews-icon.png';
import { red } from 'ansi-colors';
const Card = (props) => {
	const styles = {
		TimesClicked: {
			icon: ClickedIcon,
			color: '#F66B4E',
			description: 'Numbers of Times Clicked'
		},
		TimesRedeemed: {
			icon: RedeemedIcon,
			color: '#0CA64F',
			description: 'Numbers of Times Redeemed'
		},
		TimesSaved: {
			icon: TimesIcon,
			color: '#00BFF5',
			description: 'Numbers of Times Saved'
		},
		FirstUsers: {
			icon: UsersIcon,
			color: '#0071BD',
			description: 'Final Time Deal Users'
		},
		Rating: {
			icon: RatingIcon,
			color: '#EACE3D',
			description: 'Spicy Okra Rating'
		},
		Reviews: {
			icon: ReviewsIcon,
			color: '#0CA64F',
			description: 'Number of Reviews'
		}
	};
	return (
		<div className={'card'}>
			<div className={'card-head'} style={{ backgroundColor: styles[props.type].color }}>
				<div className={'card-image'}>
					<img src={styles[props.type].icon} />
				</div>
			</div>
			<div className={'card-content'}>
				<div className={'card-value'}>{props.value}</div>
				<div className={'card-description'}>{styles[props.type].description}</div>
			</div>
		</div>
	);
};

export default Card;
