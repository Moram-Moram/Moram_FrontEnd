import AuthState from './interface';
import { ID, PASSWORD, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../action/auth/interface';
import { authActionType } from '../../action/auth';

export const initState: AuthState = {
  id: '',
  password: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
  isSuccessSaveLogin: undefined,
};

const AuthReducer = (state: AuthState, action: authActionType): AuthState => {
  switch (action.type) {
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isSuccessSaveLogin: undefined,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSuccessSaveLogin: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isSuccessSaveLogin: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
