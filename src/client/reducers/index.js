import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import loader from './loader';

export default combineReducers({
  todos,
  loader,
  routing: routerReducer
});
