export const setToken = (token: string) => {
  return localStorage.setItem('token', token);
};

export const getToken = (): any => {
  return localStorage?.getItem('token');
};

export const setRefreshToken = (token: string) => {
  return localStorage.setItem('refresh_token', token);
};

export const getRefreshToken = (): any => {
  return localStorage?.getItem('refresh_token');
};
