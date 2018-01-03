import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import initStore from './store';

const history = createBrowserHistory();
const store = initStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;

    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('app')
    );
  });

  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

