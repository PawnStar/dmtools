import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import encounter from './encounter';
import characters from './characters';
import characterPane from './characterPane';
import saveStatus from './saveStatus';

const rootReducer = combineReducers({
  characters,
  encounter,
  characterPane,
  saveStatus,
  routing
});

export default rootReducer;
