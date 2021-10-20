import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { LOGIN } from '../../modules/redux/action/auth/interface';
import { ID, PASSWORD, START, ISFIRST, SIGNUP } from '../../constance/login';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
  password: string;
  setId: (payload: string) => void;
  setPassword: (payload: string) => void;
}

const Login: FC<Props> = props => {
  const { id, password, setId, setPassword } = props;
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const idChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    if (id && password) setStart(true);
    else setStart(false);
  }, [id, password]);

  const startBtnClickHandler = () => {
    if (start) dispatch({ type: LOGIN });
  };

  return (
    <S.Login>
      <Header />
      <S.LoginBox>
        <S.LoginTitle>{LOGIN}</S.LoginTitle>
        <S.InputLine>
          <S.InputTitle>{ID}</S.InputTitle>
          <S.Input onChange={idChangeHandler} />
          <S.InputTitle>{PASSWORD}</S.InputTitle>
          <S.Input type='password' onChange={passwordChangeHandler} />
        </S.InputLine>
        <S.StartBtn isStart={start} onClick={startBtnClickHandler}>
          <p>{START}</p>
        </S.StartBtn>
        <S.IsSignup>{ISFIRST}</S.IsSignup>
        <S.Signup to='/signup'>{SIGNUP}</S.Signup>
      </S.LoginBox>
    </S.Login>
  );
};

export default Login;
