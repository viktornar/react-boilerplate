import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../client/containers/App';
import reducers from '../client/reducers/index';
import * as constants from './constants';

export default (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.send(`
      <!doctype html>
      <html>
        <head>
          <title>${constants.APPLICATION_NAME}</title>
        </head>
        <body>
          <div id='app'></div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  } else if (process.env.NODE_ENV === 'production') {
    const renderedBundle = renderToString(
      <Provider store={ createStore(reducers) }>
        <StaticRouter location={ req.url } context={ {} }>
          <App />
        </StaticRouter>
      </Provider>
    );
    res.send(`
      <!doctype html>
      <html>
        <head>
          <title>${constants.APPLICATION_NAME}</title>
          <link rel='stylesheet' href='bundle.css' />
        </head>
        <body>
          <div id='app'>
            ${renderedBundle}
          </div>
          <script src='bundle.js'></script>
        </body>
      </html>
    `);
  }
};
