import axios from 'axios';

export const wordCloudApi = {
  async fetchAll() {
    return await axios('http://localhost:3000/wordcloud');
  },
};
