export const setToken = (token: string) => {
  return localStorage.setItem('token', token);
};

export const getToken = (): any => {
  return localStorage?.getItem('token');
};
