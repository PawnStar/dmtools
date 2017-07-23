import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import encounter from './encounter';
import characters from './characters';

const rootReducer = combineReducers({
  characters,
  encounter,
  routing
});

export default rootReducer;
