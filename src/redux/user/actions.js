import { createTypes, completeTypes } from 'redux-recompose';

import UserService from 'services/UserService';

import AlertActions from '../alert/actions';

/* ------------- Auth actions ------------- */
export const actions = createTypes(
  completeTypes(['GET_USER_INFORMATION', 'GET_USER_PROFILE', 'UPDATE_USER_PROFILE'], ['REMOVE_USER']),
  '@@USER'
);

const privateActionCreators = {
  getUserInformationSuccess: payload => ({
    type: actions.GET_USER_INFORMATION_SUCCESS,
    target: 'currentUser',
    payload
  }),
  getUserInformationFailure: () => ({
    type: actions.GET_USER_INFORMATION_FAILURE,
    target: 'currentUser'
  }),
  getUserProfileSuccess: (state, payload) => ({
    type: actions.GET_USER_PROFILE_SUCCESS,
    target: 'userProfile',
    payload
  }),
  getUserProfileFailure: error => ({
    type: actions.GET_USER_PROFILE_FAILURE,
    target: 'userProfile',
    payload: error
  }),
  updateUserProfileSuccess: (state, payload) => ({
    type: actions.UPDATE_USER_PROFILE_SUCCESS,
    target: 'userProfile',
    payload
  }),
  updateUserProfileFailure: error => ({
    type: actions.UPDATE_USER_PROFILE_FAILURE,
    target: 'userProfile',
    payload: error
  })
};

export const actionCreators = {
  getUserInformation: () => async dispatch => {
    dispatch({ type: actions.GET_USER_INFORMATION, target: 'currentUser' });
    const response = await UserService.getUserInformation();
    if (response.error) {
      dispatch(privateActionCreators.getUserInformationFailure());
      dispatch(AlertActions.error(response.error, 'Users:getUserInformationDefaultError'));
    } else {
      dispatch(privateActionCreators.getUserInformationSuccess(response.data));
    }
  }
};

export default actionCreators;
