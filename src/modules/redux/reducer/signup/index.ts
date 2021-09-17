import SignupState from './interface';
import { signupActionType } from '../../action/signup';
import {
  ID,
  PASSWORD,
  NICKNAMD,
  WHITECHECK,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  ID_DUPLICATECHECK,
  ID_DUPLICATECHECK_SUCCESS,
  ID_DUPLICATECHECK_FAILURE,
  PW_DUPLICATECHECK,
  PW_DUPLICATECHECK_SUCCESS,
  PW_DUPLICATECHECK_FAILURE,
} from '../../action/signup/interface';

export const initState: SignupState = {
  id: '',
  password: '',
  nickname: '',
  whiteCheck: false,
  isSuccessSaveSignup: undefined,
  isSuccessCheckId: undefined,
  isSuccessCheckPassword: undefined,
  error: null,
};

const SignupReducer = (state: SignupState = initState, action: signupActionType): SignupState => {
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
    case NICKNAMD:
      return {
        ...state,
        nickname: action.payload,
      };
    case WHITECHECK:
      return {
        ...state,
        whiteCheck: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        isSuccessSaveSignup: undefined,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSuccessSaveSignup: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSuccessSaveSignup: false,
      };
    case ID_DUPLICATECHECK:
      return {
        ...state,
        isSuccessCheckId: undefined,
      };
    case ID_DUPLICATECHECK_SUCCESS:
      return {
        ...state,
        isSuccessCheckId: true,
      };
    case ID_DUPLICATECHECK_FAILURE:
      return {
        ...state,
        isSuccessCheckPassword: false,
      };
    case PW_DUPLICATECHECK:
      return {
        ...state,
        isSuccessCheckPassword: undefined,
      };
    case PW_DUPLICATECHECK_SUCCESS:
      return {
        ...state,
        isSuccessCheckPassword: true,
      };
    case PW_DUPLICATECHECK_FAILURE:
      return {
        ...state,
        isSuccessCheckPassword: false,
      };
  }
};

export default SignupReducer;
