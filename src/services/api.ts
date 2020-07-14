import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.eventials.com/v1/',
});

export default api;
