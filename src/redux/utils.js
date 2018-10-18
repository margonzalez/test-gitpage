import Immutable from 'seamless-immutable';

import { actions as AlertActions } from 'redux/alert/actions';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 */
export function stringArrayToObject(actionsArray, namespace = '') {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  const actions = Immutable(actionsArray);
  return Immutable.asObject(actions, actionName => [actionName, `${namespace}:${actionName}`]);
}

// export const withPolling = async request => {
//   const response = {};
//   if (!request.ok) {
//     response.error = request.data || 'undefined';
//     response.status = request.status;
//     return response;
//   }
//   return PollingService.poll(request)
//     .then(result => {
//       response.data = result.data;
//       return response;
//     })
//     .catch(err => {
//       response.error = err.data || 'timeout';
//       response.status = err.status;
//       return response;
//     });
// };

export const snackbarDispatcher = (dispatch, action, payload) => {
  dispatch({ type: AlertActions.CLOSE_ALERT_SNACKBAR });
  return setTimeout(
    () =>
      dispatch({
        type: action,
        payload
      }),
    300
  );
};
