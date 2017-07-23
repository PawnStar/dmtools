import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import DevTools from '../components/containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

const getMiddleware = ()=>{
  if (process.env.NODE_ENV === 'development') return compose( applyMiddleware(middleware), DevTools.instrument() );
  return applyMiddleware(middleware);
};

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    getMiddleware()
  );
}
