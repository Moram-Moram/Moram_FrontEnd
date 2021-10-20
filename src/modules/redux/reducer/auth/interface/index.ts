import { error } from '../../../../../models/error';

interface AuthState {
  id: string;
  password: string;
  error: error;
  isSuccessSaveLogin: boolean | undefined;
}

export default AuthState;
