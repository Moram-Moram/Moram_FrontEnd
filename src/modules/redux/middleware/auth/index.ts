import { call, put, select, takeLatest } from 'redux-saga/effects';
import { login } from '../../../../util/api/auth';
import { LOGIN } from '../../action/auth/interface';
import { reducerType } from '../../reducer';
import AuthState from '../../reducer/auth/interface';

const getStateFunc = (state: reducerType): AuthState => state.auth;

const loginSaga = function* (): any {
  const type = 'AUTH/LOGIN';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(login, state.id, state.password);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({ type: FAILURE, payload: { ...error.response.data, type: type } });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

export default authSaga;
