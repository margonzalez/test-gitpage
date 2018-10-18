import api from '@config/api';

export default {
  getUserInformation: async () => api.get('api/v1/users/async')
};
