import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import encounter from './encounter';
import characters from './characters';
import selectedCharacter from './selectedCharacter';
import saveStatus from './saveStatus';

const rootReducer = combineReducers({
  characters,
  encounter,
  selectedCharacter,
  saveStatus,
  routing
});

export default rootReducer;
