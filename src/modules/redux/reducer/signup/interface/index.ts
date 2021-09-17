import { error } from '../../../../../models/error';

interface SignupState {
  id: string;
  password: string;
  nickname: string;
  whiteCheck: boolean;
  isSuccessSaveSignup: boolean | undefined;
  isSuccessCheckId: boolean | undefined;
  isSuccessCheckPassword: boolean | undefined;
  error: error | null;
}

export default SignupState;
