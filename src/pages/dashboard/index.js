import React from 'react';
import renderHTML from 'react-render-html';
import Navbar from '../../components/Navbar';
import './style.scss';

export default class DashboardPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={'dashboard-page'}>
				<Navbar current="dashbaord" />
			</div>
		);
	}
}
