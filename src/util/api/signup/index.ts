import uri from '../../../constance';
import { getRequest } from '../default';

export const idDuplicateCheck = async (id: string) => {
  try {
    const request = getRequest();
    await request.get(`${uri.signup}/${id}/exists`);
  } catch (error) {
    throw error;
  }
};

export const nickNameDuplicateCheck = async (nickname: string) => {
  try {
    const request = getRequest();
    await request.get(`${uri.signup}/${nickname}/exists`);
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  nickname: string,
  id: string,
  password: string,
  whiteCheck: boolean,
) => {
  try {
    const request = getRequest();
    await request.post(uri.signup, {
      id: id,
      password: password,
      nickname: nickname,
      whiteCheck: whiteCheck,
    });
  } catch (error) {
    throw error;
  }
};
