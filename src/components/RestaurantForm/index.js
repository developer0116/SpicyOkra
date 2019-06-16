import React from 'react';
import './style.scss';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
const RestaurantForm = (props) => {
	return (
		<div className={'restaurant-form'}>
			<div>
				<div className={'restaurant-form-heading'}>Tell us a bit about your restaurant</div>
				<div className={'restaurant-form-second-row label'}>Restaurant Name</div>
				<TextInput className={'restaurant-form-name'} placeholder="Osteria Francescana" />
				<div className={'restaurant-form-third-row label'}>Street Address</div>
				<TextInput placeholder="2241121 Modena MO" />
				<div className={'restaurant-form-fourth-row'}>
					<div className={'restaurant-form-city'}>
						<div className={'label'}>City</div>
						<TextInput placeholder="Modena MO" />
					</div>
					<div className={'restaurant-form-state'}>
						<div className={'label'}>State</div>
						<TextInput placeholder="Modena MO" />
					</div>
					<div className={'restaurant-form-zipcode'}>
						<div className={'label'}>Zipcode</div>
						<TextInput placeholder="100000" />
					</div>
				</div>
				<div className={'restaurant-form-number label'}>Restaurant Phone Number</div>
				<TextInput placeholder="982-445-4499" />
				<div className={'restaurant-form-cuisine label'}>Cuisine Type</div>
				<TextInput placeholder="Vegetables" />
				<div className={'restaurant-form-url label'}>Restaurant Website URL</div>
				<TextInput placeholder="www.osteriafrancescana.it" />
				<div className={'restaurant-form-facebook label'}>Facebook Page URL</div>
				<TextInput placeholder="Nope" />
				<div className={'submit'}>
					<span>LET'S GET STARTED</span>
				</div>
			</div>
		</div>
	);
};

export default RestaurantForm;
