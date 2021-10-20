import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { ID, PASSWORD, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './interface';

export const setId = createAction(ID)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const login = createAction(LOGIN)<{ id: string; password: string }>();
export const loginSuccess = createAction(LOGIN_SUCCESS)();
export const loginFailure = createAction(LOGIN_FAILURE)<error>();

export type authActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;
