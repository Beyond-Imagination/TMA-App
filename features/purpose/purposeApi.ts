import axios from 'axios';

export const purposeApi = {
  async fetchAll() {
    return await axios.get('http://localhost:3000/purposes');
  },
};
