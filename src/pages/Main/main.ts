import { apiFailed, getRefreshToken, tokenIsValid } from 'services/organization';
import { generateToken, listAllGroups, listAllWebinars, refreshToken } from 'services/requests';


export const loadAllGroups = async () => {

  let token = await tokenIsValid()

  let response = await listAllGroups(token);

  if (response?.status === 401) {
    if (getRefreshToken()) {
      token = await refreshToken(getRefreshToken())
      response = await listAllGroups(token)

      const { data } = response;
      return data;

    } else {
      token = await generateToken();
    }
  } else if (response) {

    const { data } = response;

    return data;
  }

  apiFailed(response);

}


export const loadLiveWebinars = async () => {

  let token = await tokenIsValid()


  let response = await listAllWebinars(token);

  if (response?.status === 401) {
    if (getRefreshToken()) {
      token = await refreshToken(getRefreshToken())
      response = await listAllWebinars(token)

      const { data } = response;
      return data;
    } else {
      token = await generateToken();
    }
  } else if (response) {

    const { data } = response;
    const live = data.filter(web => web?.state === 'live');

    return live;
  }

  apiFailed(response);
}
