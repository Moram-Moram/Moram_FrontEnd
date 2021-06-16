import styled from 'styled-components';
import { color } from '../../../style';

export const Header = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 74px;
  background-color: white;
`;

export const HeaderContent = styled.div`
  width: 1240px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const LogoText = styled.p`
  width: 115px;
  font-size: 29px;
  font-weight: bold;
  color: ${color.main};
  margin-left: 7%;
`;

export const LogoImg = styled.img`
  width: 26px;
  height: 23px;
`;

export const Login = styled.p`
  width: 52px;
  font-size: 18px;
  margin-right: 10px;
`;

export const Signup = styled(Login)`
  width: 68px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 7%;
`;
