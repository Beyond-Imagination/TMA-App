import axios from '../../utils/CommonApi';

export const suggestionApi = {
  async fetchAll(interest: string) {
    let url = '/api/suggestions' + (interest ? '?interest=' + interest : '');
    return await axios.get(url);
  },
};
