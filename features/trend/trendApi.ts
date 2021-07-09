import axios from 'axios';

export const trendApi = {
  async fetchAll() {
    return await axios.get('http://localhost:3000/trends');
  },
};
