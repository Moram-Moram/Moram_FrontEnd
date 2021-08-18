import React from 'react';
import * as S from './style';
import Header from '../header';
import { SINGUPINPUT, WHITESTART, START } from '../../constance/signup';
import { useRecoilState } from 'recoil';
import { idState, nicknameState, passwordState, whiteCheckState } from '../../modules/atom/signup';

const Signup = () => {
  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [whiteCheck, setWiteCheck] = useRecoilState(whiteCheckState);

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
                {data.duplicateCheck && <S.DuplicateCheckBtn>중복검사</S.DuplicateCheckBtn>}
              </S.InputTitle>
              <S.Input name={data.id} />
            </>
          );
        })}
        <S.StartCheckLine>
          <S.StartCheckBox>
            <S.SmallCheckBox />
          </S.StartCheckBox>
          <S.StartExplain>{WHITESTART}</S.StartExplain>
        </S.StartCheckLine>
        <S.StartBtn>{START}</S.StartBtn>
        <S.IsLogin>이미 계정이 있나요?</S.IsLogin>
        <S.LoginBtn>로그인하기</S.LoginBtn>
      </S.SignupBox>
    </S.Signup>
  );
};

export default Signup;
