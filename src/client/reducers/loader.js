import { combineReducers } from 'redux';

const _initialState = { isLoading: true, hasLoaded: false };

const loader = (isLoadingTypes = [], isNotLoadingTypes = [], initialState = _initialState) => {
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
  dummy: loader()
});
