import Immutable from 'seamless-immutable';
import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

export const defaultState = {
  currentUser: null,
  currentUserLoading: false,
  userProfileLoading: false
};

const reducerDescription = {
  primaryActions: [actions.GET_USER_INFORMATION, actions.GET_USER_PROFILE, actions.UPDATE_USER_PROFILE],
  override: {
    [actions.REMOVE_USER]: state =>
      Immutable.merge(state, {
        currentUser: null
      })
  }
};

export const reducer = createReducer(Immutable(defaultState), completeReducer(reducerDescription));
