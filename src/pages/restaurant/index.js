import React from 'react';
import renderHTML from 'react-render-html';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import RestaurantForm from '../../components/RestaurantForm';
import RestaurantImg2 from '../../assets/img/restaurant_img2.png';

import './style.scss';

export default class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<div className={'restaurant-main-panel'}>
					<Topbar />

					<div className={'restaurant-main-panel-img2'}>
						<img src={RestaurantImg2} />
					</div>
					<div className={'panel-1-2'} />
					<RestaurantForm />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
