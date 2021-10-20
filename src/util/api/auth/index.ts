import uri from '../../../constance';
import { getRequest } from '../default';

export const login = async (id: string, password: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.auth, { id: id, pw: password });
    localStorage.setItem('access_token', response.data.accessToken);
    localStorage.setItem('refresh_token', response.data.refreshToken);
    return response;
  } catch (error) {
    throw error;
  }
};
