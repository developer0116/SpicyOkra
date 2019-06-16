import React from 'react';
import renderHTML from 'react-render-html';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import RestaurantForm from '../../components/RestaurantForm';
import RestaurantImg1 from '../../assets/img/restaurant_img1.png';
import RestaurantImg2 from '../../assets/img/restaurant_img2.png';

import './style.scss';

export default class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<div className={'main-panel'}>
					<Topbar />
					<div className={'main-panel-img1'}>
						<img src={RestaurantImg1} />
					</div>
					<div className={'main-panel-img2'}>
						<img src={RestaurantImg2} />
					</div>
					<RestaurantForm />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
