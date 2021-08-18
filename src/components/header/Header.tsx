import React from 'react';
import * as S from './style';
import { logo } from '../../assets/header';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <Link to=''>
          <div>
            <S.LogoText>모람모람</S.LogoText>

            <S.LogoImg src={logo} />
          </div>
        </Link>
        <div>
          <S.Login to='login'>로그인</S.Login>
          <p>|</p>
          <S.Signup to='signup'>회원가입</S.Signup>
        </div>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
