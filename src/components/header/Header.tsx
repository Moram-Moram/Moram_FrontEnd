import React from 'react';
import * as S from './style';
import { logo } from '../../assets/header';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <div>
          <S.LogoText>모람모람</S.LogoText>
          <S.LogoImg src={logo} />
        </div>
        <div>
          <S.Login>로그인</S.Login>
          <p>|</p>
          <S.Signup>회원가입</S.Signup>
        </div>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
