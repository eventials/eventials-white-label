import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-stg.eventials.com/v1/',
});

export default api;
