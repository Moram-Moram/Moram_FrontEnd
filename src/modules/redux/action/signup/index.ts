import { signupType } from '../../../../constance/signup';
import { error } from '../../../../models/error';
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
  NICKNAME_DUPLICATECHECK,
  NICKNAME_DUPLICATECHECK_SUCCESS,
  NICKNAME_DUPLICATECHECK_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setId = createAction(ID)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const setNickname = createAction(NICKNAMD)<string>();
export const setWhiteCheck = createAction(WHITECHECK)<boolean>();

export const signup = createAction(SIGNUP)<signupType>();
export const signupSuccess = createAction(SIGNUP_SUCCESS)();
export const signupFailure = createAction(SIGNUP_FAILURE)<error>();

export const idDuplicateCheck = createAction(ID_DUPLICATECHECK)();
export const idDuplicateCheckSuccess = createAction(ID_DUPLICATECHECK_SUCCESS)();
export const idDuplicateCheckFailure = createAction(ID_DUPLICATECHECK_FAILURE)<error>();

export const nickNameDuplicateCheck = createAction(NICKNAME_DUPLICATECHECK)();
export const nickNameDuplicateCheckFailure = createAction(NICKNAME_DUPLICATECHECK_FAILURE)<error>();
export const nickNameDuplicateCheckSuccess = createAction(NICKNAME_DUPLICATECHECK_SUCCESS)();

export type signupActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setNickname>
  | ReturnType<typeof setWhiteCheck>
  | ReturnType<typeof signup>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>
  | ReturnType<typeof idDuplicateCheck>
  | ReturnType<typeof idDuplicateCheckSuccess>
  | ReturnType<typeof idDuplicateCheckFailure>
  | ReturnType<typeof nickNameDuplicateCheck>
  | ReturnType<typeof nickNameDuplicateCheckSuccess>
  | ReturnType<typeof nickNameDuplicateCheckFailure>;
