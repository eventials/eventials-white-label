import { apiFailed, getRefreshToken, tokenIsValid } from 'services/organization';
import { generateToken, listWebinarsGroup, refreshToken } from 'services/requests';





export const loadAllGroups = async (id: number) => {

  let token = await tokenIsValid()

  let response = await listWebinarsGroup(token, id);

  if (response?.status === 401) {
    if (getRefreshToken()) {
      token = await refreshToken(getRefreshToken())
      response = await listWebinarsGroup(token, id)

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
