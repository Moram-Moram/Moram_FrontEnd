import { idDuplicateCheck, nickNameDuplicateCheck, signup } from '../../../../util/api/signup';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SIGNUP, ID_DUPLICATECHECK, NICKNAME_DUPLICATECHECK } from '../../action/signup/interface';
import { reducerType } from '../../reducer';
import SignupState from '../../reducer/signup/interface';

const getStateFunc = (state: reducerType): SignupState => state.signup;

const idDuplicateCheckSaga = function* (): any {
  const type = 'SIGNUP/ID_DUPLICATECHECK';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(idDuplicateCheck, state.id);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
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

const nickNameDuplicateCheckSaga = function* (): any {
  const type = 'SIGNUP/NICKNAME_DUPLICATECHECK';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(nickNameDuplicateCheck, state.nickname);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
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

const signupSaveSaga = function* (): any {
  const type = 'SIGNUP/SIGNUP';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(signup, state.id, state.password, state.nickname, state.whiteCheck);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
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

function* signupSaga() {
  yield takeLatest(ID_DUPLICATECHECK, idDuplicateCheckSaga);
  yield takeLatest(NICKNAME_DUPLICATECHECK, nickNameDuplicateCheckSaga);
  yield takeLatest(SIGNUP, signupSaveSaga);
}

export default signupSaga;
