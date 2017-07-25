import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Settings from './pages/Settings';
import Titlebar from './common/Titlebar';

const root = window.__webpack_public_path__;

export default (
	<div>
		<Titlebar/>
		<Switch>
			<Route exact path={root} component={MainPage} />
			<Route path={root + 'settings'} component={Settings} />
		</Switch>
	</div>
);
