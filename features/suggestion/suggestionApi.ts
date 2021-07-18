import axios from 'axios';

export const suggestionApi = {
  async fetchAll() {
    return await axios.get('http://localhost:3000/api/suggestions');
  },
};
