import api from 'services/api';
import { setRefreshToken, setToken } from 'services/organization';

const clientCredential = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const requestWithJwt = (token: string) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Headers':
        'Content-Type, Application/json, Origin,X-Requested-With,Content-Type,Accept,Cache-Control',
      'Access-Control-Allow-Methods':
        'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH',
    },
  };

  return config;
};

export const generateToken = async () => {
  const params = `grant_type=client_credentials&client_id=${clientCredential}&client_secret=${clientSecret}`;

  const url = `/oauth/token?${params}`;

  const response = await api.post(url);

  if (response.status === 200) {
    const { data } = response;

    setToken(data?.access_token);
    setRefreshToken(data?.refresh_token);
  }

  return response;
};

export const refreshToken = async (refreshToken: string) => {
  const params = `grant_type=refresh_token&client_id=${clientCredential}&client_secret=${clientSecret}&refresh_token=${refreshToken}`;

  const url = `/oauth/token?${params}`;

  const response = await api.post(url);

  if (response.status === 200) {
    const { data } = response;

    setToken(data?.access_token);
    setRefreshToken(data?.refresh_token);
  }

  return response;
};

export const listAllWebinars = async (token: string) => {
  const url = `/webinars`;

  try {
    const response = await api.get(`${url}`, requestWithJwt(token));
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getCurrentUser = async (token: string) => {
  const url = `/me`;

  try {
    const response = await api.get(`${url}`, requestWithJwt(token));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const listCategories = async () => {
  const url = `/categories`;

  try {
    const response = await api.get(`${url}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
