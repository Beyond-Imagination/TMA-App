import axios from '../../utils/CommonApi';

export const trendApi = {
  async fetchAll() {
    return await axios.get('/api/trends');
  },
};
