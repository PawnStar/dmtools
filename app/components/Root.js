import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Routes from './router.js';

import DevTools from './common/DevTools';

const dev = (()=>{
  if (process.env.NODE_ENV === 'development') return (<DevTools />);
  return null;
})();


export default function Root({store, history}) {
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          {Routes}
        </ConnectedRouter>
        {dev}
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
