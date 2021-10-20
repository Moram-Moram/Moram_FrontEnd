import { useDispatch } from 'react-redux';
import { setId, setPassword } from '../../../modules/redux/action/auth';
import { useSelectState } from '../default';

const useAuth = () => {
  const dispatch = useDispatch();
  const state = useSelectState().auth;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
  };
  return { state, setState };
};

export default useAuth;
