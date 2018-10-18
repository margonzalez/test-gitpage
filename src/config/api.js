import { create } from 'apisauce';

import AlertActions from 'redux/alert/actions';

const api = create({
  baseURL: 'http://localhost:8080',
  headers: { Channel: 'web' },
  timeout: 30000
});

export const apiSetup = dispatch => {
  api.addMonitor(response => {
    if (
      response.status === 401
      // !NOT_CONFIRMED.includes(response.data.error) &&
      // !INVALID_CREDENTIALS.includes(response.data.error)
    ) {
      // dispatch(AuthActions.signOut(TOKEN_EXPIRATION));
      dispatch(AlertActions.error('monitor api sauce agg!'));
    }
  });
};

export default api;
