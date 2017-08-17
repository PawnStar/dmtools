import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EncounterPage from './pages/EncounterPage';
import CharactersPage from './pages/CharactersPage';
import Settings from './pages/Settings';
import Titlebar from './common/titlebar/Titlebar';
import EncounterInsert from './encounter/insert/CharacterInsertPane';

const CharacterCreate = null;

const root = window.__webpack_public_path__;

export default (
	<div>
		<Titlebar/>
		<Route exact path={root} component={null} />
		<Route path={root + 'encounter'} component={EncounterPage} />
		<Route path={root + 'encounter/insert'} component={EncounterInsert} />
		<Route path={root + 'characters'} component={CharactersPage} />
		<Route path={root + 'characters/add'} component={CharacterCreate} />
		<Route path={root + 'settings'} component={Settings} />
	</div>
);
