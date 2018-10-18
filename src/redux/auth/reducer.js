import Immutable from 'seamless-immutable';
import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Auth reducer ------------- */
export const defaultState = {
  test: null
};

const reducerDescription = {
  primaryActions: [actions.TEST_PRIMARY],
  override: {
    [actions.TEST_OVERRIDE]: (state, action) =>
      Immutable.merge(state, {
        test: 'funca!'
      })
  }
};

export const reducer = createReducer(Immutable(defaultState), completeReducer(reducerDescription));
