import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import HomePage from './pages/home';
import RestaurantPage from './pages/restaurant';
import DashboardPage from './pages/dashboard';
import DealsPage from './pages/deals';
import ExperiencesPage from './pages/experiences';
import SettingsPage from './pages/settings';

import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/restaurant" component={RestaurantPage} />
				<Route exact path="/dashboard" component={DashboardPage} />
				<Route exact path="/deals" component={DealsPage} />
				<Route exact path="/experiences" component={ExperiencesPage} />
				<Route exact path="/settings" component={SettingsPage} />
			</div>
		</Router>
	);
}

export default App;
