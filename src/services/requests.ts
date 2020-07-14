import api from 'services/api';
import { setToken, getToken } from 'services/organization';

const requestWithJwt = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Headers': 'Content-Type, Application/json',
      'Access-Control-Allow-Methods':
        'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH',
    },
  };

  return config;
};

export const generateToken = async (
  clientCredential: string,
  clientSecret: string,
) => {
  const payload = `grant_type=client_credentials&client_id=${clientCredential}&client_secret=${clientSecret}`;

  const url = `oauth/token?${payload}`;

  const response = await api.post(url);

  if (response.status === 200) {
    const { data } = response;

    setToken(data?.access_token);
  }

  return response;
};

export const listAllWebinars = async () => {
  const url = `webinars`;

  try {
    const response = await api.get(`${url}`, requestWithJwt());
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
export const getCurrentUser = async () => {
  const url = `me`;

  try {
    const response = await api.get(`${url}`, requestWithJwt());
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const listCategories = async () => {
  const url = `categories`;

  try {
    const response = await api.get(`${url}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
