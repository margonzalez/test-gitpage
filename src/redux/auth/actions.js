import { createTypes, completeTypes } from 'redux-recompose';

import AlertActions from 'redux/alert/actions';
import AuthService from 'services/AuthService';

export const actions = createTypes(completeTypes(['TEST_PRIMARY'], ['TEST_OVERRIDE']), '@@AUTH');

const privateActionCreators = {
  testPrimarySuccess: mssg => ({
    type: actions.TEST_PRIMARY,
    payload: mssg,
    target: 'primary'
  }),
  testPrimaryFailure: mssg => ({
    type: actions.TEST_PRIMARY,
    payload: mssg,
    target: 'primary'
  })
};

const actionCreators = {
  testPrimary: () => async dispatch => {
    dispatch({ type: actions.TEST_PRIMARY });
    const response = await AuthService.getSimple();
    console.log(response);
    dispatch(AlertActions.info(`dafak -- ${response}`));
    // if (response.error) {
    //   dispatch(privateActionCreators.testPrimarySuccess(error));
    // } else {
    //   dispatch(privateActionCreators.testPrimaryFailure(response.data.message));
    // }
  },
  testOverride: name => async dispatch => {
    dispatch({ type: actions.TEST_PRIMARY, target: 'primary' });
    const response = await AuthService.get(name);
    console.log(response);
    dispatch({ type: actions.TEST_PRIMARY_SUCCESS, target: 'primary' });
    // if (response.error) {
    //   dispatch(privateActionCreators.testPrimarySuccess(error));
    // } else {
    //   dispatch(privateActionCreators.testPrimaryFailure(response.data.message));
    // }
  }
};

export default actionCreators;
