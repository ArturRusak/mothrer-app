import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import RegistrationPage from './Registration';

const Routes = () => (
	<div className="main">
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={RegistrationPage} />
			<Route path="/new-article" component={HomePage} />
			<Route path="/settings" component={HomePage} />
			<Route path="/profile" component={HomePage} />
			<Route path="/logout" component={HomePage} />
		</Switch>
	</div>
);

export default Routes;
