import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Routes = () => (
	<div className="main">
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" component={Home} />
			<Route path="/register" component={Home} />
			<Route path="/new-article" component={Home} />
			<Route path="/settings" component={Home} />
			<Route path="/profile" component={Home} />
			<Route path="/logout" component={Home} />
		</Switch>
	</div>
);

export default Routes;
