import styled from 'styled-components';
import { color } from '../../../style';

export const Signup = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  background-color: #fafafa;
`;

export const SignupBox = styled.div`
  width: 360px;
  height: 518px;
  background-color: white;
  margin: 0 auto;
  margin-top: 9.5%;
  border: 1px solid ${color.border};
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
`;

export const SignUpTitle = styled.p`
  width: 105px;
  font-size: 30px;
  color: ${color.main};
  font-weight: bold;
  margin: 38px auto 6px auto;
`;

export const InputTitle = styled.div`
  width: 275px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px auto 3px auto;
  > p {
    font-size: 15px;
  }
`;

export const DuplicateCheckBtn = styled.div`
  width: 54px;
  height: 23px;
  text-align: center;
  color: ${color.explain};
  background-color: ${color.btnBackground};
  padding: 6px 0px;
  border-radius: 10px;
  font-size: 10px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: ${color.light};
    border: 1px solid ${color.light};
    background-color: #ffffff;
    padding: 5px 0px;
  }
`;

export const Input = styled.input`
  width: 275px;
  height: 45px;
  border: 1px solid ${color.inputBorder};
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  padding: 0px 13px;
`;

export const StartCheckLine = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StartCheckBox = styled.div`
  width: 13px;
  height: 13px;
  border: 1px solid ${color.explain};
  margin-right: 10px;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 2px;
`;

export const SmallCheckBox = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${color.main};
  border-radius: 1px;
  margin: 0px auto;
`;

export const StartExplain = styled.p`
  font-size: 12px;
  color: ${color.explain};
  text-align: center;
`;

export const StartBtn = styled.div`
  width: 275px;
  height: 45px;
  background-color: #e8e8e8;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 15px 0px;
  font-size: 15px;
  color: ${color.explain};
  cursor: pointer;
`;

export const IsLogin = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${color.explain};
  margin: 18px 0px 5px 0px;
`;

export const LoginBtn = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${color.explain};
  cursor: pointer;
`;
