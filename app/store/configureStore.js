import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/containers/DevTools';

export const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

const getMiddleware = ()=>{
  const middleware = applyMiddleware(routerMiddleware, thunk)

  if (process.env.NODE_ENV === 'development') return compose( middleware, DevTools.instrument() );
  return applyMiddleware(middleware, thunk);
};

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    getMiddleware()
  );
}
