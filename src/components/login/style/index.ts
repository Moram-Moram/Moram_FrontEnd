import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Login = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  background-color: #fafafa;
`;

export const LoginBox = styled.div`
  width: 360px;
  height: 518px;
  background-color: white;
  margin: 0 auto;
  margin-top: 9.5%;
  border: 1px solid ${color.border};
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
`;

export const LoginTitle = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: ${color.main};
  text-align: center;
  margin: 60px 0px 40px 0px;
`;

export const InputLine = styled.div`
  width: 275px;
  margin: 0 auto;
`;

export const InputTitle = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid ${color.inputBorder};
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0px 10px;
`;

export const StartBtn = styled.div<{ isStart: boolean }>`
  width: 275px;
  height: 45px;
  border-radius: 10px;
  text-align: center;
  margin: 20px auto 25px auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isStart }) => css`
    background-color: ${isStart ? color.main : '#e8e8e8'};
    > p {
      color: ${isStart ? '#ffffff' : color.explain};
    }
  `}
`;

export const IsSignup = styled.p`
  font-size: 14px;
  color: ${color.explain};
  text-align: center;
  margin-bottom: 6px;
`;

export const Signup = styled(Link)`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: ${color.explain};
  display: flex;
  justify-content: center;
`;
