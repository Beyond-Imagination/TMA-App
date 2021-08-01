import axiosDefault from 'axios';
import {API_SERVER_HOST, API_SERVER_PORT} from "@env"

const axios = axiosDefault.create({
  baseURL: `${API_SERVER_HOST}:${API_SERVER_PORT}`,
});

export default axios;
