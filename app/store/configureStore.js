import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/common/DevTools';
import { saveComplete } from '../actions';

export const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);
const localStorage = window.localStorage;
const initialState = JSON.parse(localStorage.getItem('dmtools') || '{}');

const getMiddleware = ()=>{
  const middleware = applyMiddleware(routerMiddleware, thunk);

  if (process.env.NODE_ENV === 'development') return compose( middleware, DevTools.instrument() );
  return middleware;
};

export function configureStore() {
  let timeout;

  const store = createStore(
    rootReducer,
    initialState,
    getMiddleware()
  );

  //For updating local storage
  const updateLocalStorage = () => {
    const state = JSON.stringify({
      characters: store.getState().characters,
      encounter: store.getState().encounter
    });

    localStorage.setItem('dmtools', state);

    store.dispatch(saveComplete());
  };

  const stateUpdate = ()=>{
    if(store.getState().saveStatus === 'saved')
      return;

    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(updateLocalStorage, 1000);
  };

  timeout = null;
  store.subscribe(stateUpdate);

  return store;
}
