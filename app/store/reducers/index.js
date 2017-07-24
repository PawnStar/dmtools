import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import encounter from './encounter';
import characters from './characters';
import selectedCharacter from './selectedCharacter';

const rootReducer = combineReducers({
  characters,
  encounter,
  selectedCharacter,
  routing
});

export default rootReducer;
