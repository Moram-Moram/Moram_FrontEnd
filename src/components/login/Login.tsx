import React from 'react';
import * as S from './style';
import Header from '../header';
import { LOGIN, ID, PASSWORD, START, ISFIRST, SIGNUP } from '../../constance/login';

const Login = () => {
  return (
    <S.Login>
      <Header />
      <S.LoginBox>
        <S.LoginTitle>{LOGIN}</S.LoginTitle>
        <S.InputLine>
          <S.InputTitle>{ID}</S.InputTitle>
          <S.Input />
          <S.InputTitle>{PASSWORD}</S.InputTitle>
          <S.Input type='password' />
        </S.InputLine>
        <S.StartBtn>
          <p>{START}</p>
        </S.StartBtn>
        <S.IsSignup>{ISFIRST}</S.IsSignup>
        <S.Signup to='/signup'>{SIGNUP}</S.Signup>
      </S.LoginBox>
    </S.Login>
  );
};

export default Login;
