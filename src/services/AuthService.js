import api from '../config/api';

import * as LocalStorageService from './LocalStorageService';

const AUTH_HEADER = 'Authorization';

export const saveSession = sessionToken => {
  api.setHeader(AUTH_HEADER, sessionToken);
  LocalStorageService.setSessionToken(sessionToken);
};

export default {
  authInit: () => {
    const currentSessionToken = LocalStorageService.getSessionToken();
    if (currentSessionToken) {
      api.setHeader(AUTH_HEADER, currentSessionToken);
      return true;
    }
    return false;
  },
  signIn: async user => api.post('api/v1/users/sessions/web', user, { timeout: 60000 }),
  signOut: () => {
    LocalStorageService.removeSessionToken();
    api.setHeader(AUTH_HEADER);
  },
  getSimple: async () => api.get('/test'),
  get: async name => api.get(`/getFromCustomQuery/${name}`)
};
