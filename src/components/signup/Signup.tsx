import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { SINGUPINPUT, WHITESTART, START } from '../../constance/signup';
import { useDispatch } from 'react-redux';
import {
  ID_DUPLICATECHECK,
  NICKNAME_DUPLICATECHECK,
  SIGNUP,
} from '../../modules/redux/action/signup/interface';

interface Props {
  whiteCheck: boolean;
  password: string;
  isSuccessCheckId: boolean | undefined;
  isSuccessCheckNickName: boolean | undefined;
  setUserId: (payload: string) => void;
  setUserPassword: (payload: string) => void;
  setUserNickname: (payload: string) => void;
  setUserWhiteCheck: (payload: boolean) => void;
}

const Signup: FC<Props> = props => {
  const {
    whiteCheck,
    password,
    isSuccessCheckId,
    isSuccessCheckNickName,
    setUserId,
    setUserPassword,
    setUserNickname,
    setUserWhiteCheck,
  } = props;
  const dispatch = useDispatch();
  const [isClickSignup, setIsClickSignup] = useState(false);

  const idChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const pwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const nickNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(event.target.value);
  };

  const IdDuplicateCheckClickHandler = () => {
    dispatch({ type: ID_DUPLICATECHECK });
  };

  const NickNameDuplicateCheckClickHandler = () => {
    dispatch({ type: NICKNAME_DUPLICATECHECK });
  };

  const SignupBtnClickHandler = () => {
    dispatch({ type: SIGNUP });
  };

  const whiteCheckBtnClickHandler = () => {
    setUserWhiteCheck(!whiteCheck);
  };

  useEffect(() => {
    if (isSuccessCheckId && isSuccessCheckNickName && password !== '') setIsClickSignup(true);
    else setIsClickSignup(false);
  }, [isSuccessCheckId, isSuccessCheckNickName, password]);

  return (
    <S.Signup>
      <Header />
      <S.SignupBox>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        {SINGUPINPUT.map(data => {
          return (
            <>
              <S.InputTitle>
                <p>{data.content}</p>
                {data.duplicateCheck && (
                  <S.DuplicateCheckBtn
                    onClick={
                      data.id === 'id'
                        ? IdDuplicateCheckClickHandler
                        : NickNameDuplicateCheckClickHandler
                    }
                    isSuccessCheck={data.id === 'id' ? isSuccessCheckId : isSuccessCheckNickName}
                  >
                    {data.id === 'id' ? (
                      isSuccessCheckId ? (
                        <p>완료</p>
                      ) : (
                        <p>중복검사</p>
                      )
                    ) : isSuccessCheckNickName ? (
                      <p>완료</p>
                    ) : (
                      <p>중복검사</p>
                    )}
                  </S.DuplicateCheckBtn>
                )}
              </S.InputTitle>
              <S.Input
                name={data.id}
                onChange={
                  data.id === 'id'
                    ? idChangeHandler
                    : data.id === 'password'
                    ? pwChangeHandler
                    : nickNameChangeHandler
                }
                type={data.id === 'password' ? 'password' : 'text'}
              />
            </>
          );
        })}
        <S.StartCheckLine>
          <S.StartCheckBox onClick={whiteCheckBtnClickHandler}>
            {whiteCheck && <S.SmallCheckBox onClick={whiteCheckBtnClickHandler} />}
          </S.StartCheckBox>
          <S.StartExplain>{WHITESTART}</S.StartExplain>
        </S.StartCheckLine>
        <S.StartBtn
          onClick={isClickSignup ? SignupBtnClickHandler : () => {}}
          canClick={isClickSignup}
        >
          <p>{START}</p>
        </S.StartBtn>
        <S.IsLogin>이미 계정이 있나요?</S.IsLogin>
        <S.LoginBtn>로그인하기</S.LoginBtn>
      </S.SignupBox>
    </S.Signup>
  );
};

export default Signup;
