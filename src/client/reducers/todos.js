import { handleActions } from 'redux-actions';

import { toggleTodo } from '../actions/todos';

const defaultState = [
  { id: 1, text: 'Todo 1', checked: false },
  { id: 2, text: 'Todo 2', checked: false },
  { id: 3, text: 'Todo 3', checked: false }
];

export default handleActions({
  [toggleTodo](state, { payload: { id } }) {
    return state.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
  },
}, defaultState);
