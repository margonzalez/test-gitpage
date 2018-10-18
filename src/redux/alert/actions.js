import { stringArrayToObject, snackbarDispatcher } from '../utils';

/* ------------- Alert actions ------------- */
export const actions = stringArrayToObject(
  ['OPEN_ALERT_DIALOG', 'CLOSE_ALERT_DIALOG', 'SUCCESS', 'ERROR', 'INFO', 'CLOSE_ALERT_SNACKBAR'],
  '@@ALERT'
);

export const actionCreators = {
  openAlertDialog(content, title) {
    return {
      type: actions.OPEN_ALERT_DIALOG,
      payload: { content, title }
    };
  },
  closeAlertDialog() {
    return {
      type: actions.CLOSE_ALERT_DIALOG
    };
  },
  success: (message, topRight, timeDuration = 5000) => async dispatch => {
    snackbarDispatcher(dispatch, actions.SUCCESS, {
      message,
      type: 'success',
      open: true,
      topRight,
      timeDuration
    });
  },
  error: (message, topRight, timeDuration = 5000) => async dispatch => {
    snackbarDispatcher(dispatch, actions.ERROR, {
      message,
      type: 'error',
      open: true,
      topRight,
      timeDuration
    });
  },
  info: (message, topRight, timeDuration = 5000) => async dispatch => {
    snackbarDispatcher(dispatch, actions.INFO, {
      message,
      type: 'info',
      open: true,
      topRight,
      timeDuration
    });
  },
  closeAlertSnackbar() {
    return {
      type: actions.CLOSE_ALERT_SNACKBAR
    };
  }
};

export default actionCreators;
