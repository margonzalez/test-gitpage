import Immutable from 'seamless-immutable';

import { actions } from './actions';

/* ------------- Alert reducer ------------- */

export const defaultState = {
  alertDialogOpen: false,
  alertDialogTitle: null,
  alertDialogContent: null,
  alertSnackbar: {
    open: false,
    type: undefined,
    message: undefined,
    topRight: undefined,
    timeDuration: undefined
  }
};

/* eslint-disable complexity */
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.OPEN_ALERT_DIALOG: {
      return Immutable.merge(state, {
        alertDialogOpen: true,
        alertDialogTitle: action.payload.title || null,
        alertDialogContent: action.payload.content || null
      });
    }
    case actions.CLOSE_ALERT_DIALOG: {
      return Immutable.merge(state, {
        alertDialogOpen: false
      });
    }
    case actions.ERROR:
    case actions.INFO:
    case actions.SUCCESS: {
      return Immutable.merge(state, { alertSnackbar: { ...action.payload } });
    }
    case actions.CLOSE_ALERT_SNACKBAR: {
      return Immutable.merge(state, {
        alertSnackbar: {
          ...state.alertSnackbar,
          open: false
        }
      });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
