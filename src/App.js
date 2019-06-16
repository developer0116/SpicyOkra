import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import HomePage from './pages/home';
import RestaurantPage from './pages/restaurant';
import DashboardPage from './pages/dashboard';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/restaurant" component={RestaurantPage} />
				<Route exact path="/dashboard" component={DashboardPage} />
			</div>
		</Router>
	);
}

export default App;
