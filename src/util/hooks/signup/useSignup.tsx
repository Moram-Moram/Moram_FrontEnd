import { useDispatch } from 'react-redux';
import {
  setId,
  setNickname,
  setPassword,
  setWhiteCheck,
} from '../../../modules/redux/action/signup';
import { useSelectState } from '../default';

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signup;
  const setState = {
    setUserId: (payload: string) => {
      dispatch(setId(payload));
    },
    setUserNickname: (payload: string) => {
      dispatch(setNickname(payload));
    },
    setUserPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    setUserWhiteCheck: (payload: boolean) => {
      dispatch(setWhiteCheck(payload));
    },
  };

  return { state, setState };
};

export default useSignup;
