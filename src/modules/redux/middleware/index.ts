import { all } from 'redux-saga/effects';
import signupSaga from './signup';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([signupSaga(), authSaga()]);
}
