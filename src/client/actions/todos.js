import { createActions } from 'redux-actions';

import { TOGGLE_TODO } from '../constants';


export const { toggleTodo } = createActions({
  [TOGGLE_TODO]: id => ({ id })
});
