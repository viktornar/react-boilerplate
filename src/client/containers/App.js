import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';
import NoMatch from './Nomatch';

if (process.env.WEBPACK) require('../styles/main.scss');


const App = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/page" component={ Page } />
    <Route component={ NoMatch } />
  </Switch>
);

export default App;
