import { combineReducers } from 'redux';
import SignupReducer from './signup';

const rootReducer = combineReducers({
  signup: SignupReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
