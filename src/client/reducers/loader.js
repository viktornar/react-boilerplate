import { combineReducers } from 'redux';

const initialState = { isLoading: true, hasLoaded: false };

const loader = (isLoadingTypes = [], isNotLoadingTypes = [], initialState = initialState) => {
  // It is a reducer generator by given action types. For [ME_FETCH], [ME_UPDATE] types will generate:
  // switch(action.type) {
  //   case ME_FETCH:
  //     return { ...state, isLoading: true };
  //   case ME_UPDATE:
  //     return { ...state, hasLoaded: true};
  //   default:
  //     state;
  // }
  // It is not a complicate code if you know JS reflection and introspection principle.

  const cases = {
    isLoading: (state) => ({ ...state, isLoading: true }),
    hasLoaded: (state) => ({ ...state, hasLoaded: true }),
    default: (state) => (state)
  };

  isLoadingTypes.forEach(type => {
    cases[type] = cases.isLoading;
  });

  isNotLoadingTypes.forEach(type => {
    cases[type] = cases.hasLoaded;
  });

  return (state = initialState, action) => (cases[action.type] ? cases[action.type](state) : cases.default(state));
};

export default combineReducers({
  dummy: loader([], [], initialState)
});
