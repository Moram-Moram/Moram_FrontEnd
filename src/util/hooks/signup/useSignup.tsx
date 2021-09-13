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
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    setNickname: (payload: string) => {
      dispatch(setNickname(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    setWhiteCheck: (payload: boolean) => {
      dispatch(setWhiteCheck(payload));
    },
  };

  return { state, setState };
};

export default useSignup;
