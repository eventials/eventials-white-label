import { generateToken } from 'services/requests';


export const apiFailed = (response: any) => {
  if (response?.status > 200 && response?.status !== 401) {
    console.log(`Falha na api, erro  ${response.status}`);
    return;
  }
}

export const tokenIsValid = async () => {
  let token: any = getToken();

  if (!token) {
    const { access_token }: any = await generateToken()
    token = access_token;
  }

  return token;
}



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
