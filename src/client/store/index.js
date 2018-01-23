import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers/index';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const initStore = (history) => createStore(reducers,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default initStore;
