import { combineReducers } from 'redux';
import SignupReducer from './signup';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  signup: SignupReducer,
  auth: AuthReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
