//   const state = yield select(getStateFunc);
//   const request = informationStateToRequest(state);

import { call, put, select } from 'redux-saga/effects';
import { reducerType } from '../../../modules/redux/reducer';

const getStateFunc = (state: reducerType): reducerType['signup'] => state.signup;

export const idDuplicateCheckSaga = function* () {
  const SUCCESS = 'SIGNUP/ID_DUPLIACTECHECK_SUCCESS';
  const FAILURE = 'SIGNUP/ID_DUPLICATECHECK_FAILURE';
  const state = yield select(getStateFunc);
  const id = state.id;
  try {
    const response = yield call(id);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'INFORMATION/INFORMATION' },
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

export const pwDuplicateCheckSaga = function* () {
  const SUCCESS = 'SIGNUP/PW_DUPLIACTECHECK_SUCCESS';
  const FAILURE = 'SIGNUP/PW_DUPLICATECHECK_FAILURE';
  const state = yield select(getStateFunc);
  const password = state.password;
  try {
    const response = yield call(password);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'INFORMATION/INFORMATION' },
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
