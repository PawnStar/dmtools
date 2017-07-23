import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Settings from './pages/Settings';
import Titlebar from './common/Titlebar';

export default (
	<div>
		<Titlebar/>
		<Switch>
			<Route exact path="/" component={MainPage} />
			<Route path="/settings" component={Settings} />
		</Switch>
	</div>
);
