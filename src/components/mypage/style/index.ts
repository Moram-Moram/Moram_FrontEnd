import styled from 'styled-components';
import { color } from '../../../style';

export const Mypage = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
`;

export const ShowInfo = styled.div`
  width: 100%;
  height: 290px;
  background-color: #fafafa;
  box-sizing: border-box;
  padding: 69px 0px;
  > div {
    display: flex;
    justify-content: center;
  }
  > div > div > div {
    display: flex;
  }
`;

export const UserProfileImg = styled.img`
  width: 152px;
  height: 152px;
  margin-right: 80px;
`;

export const UserName = styled.p`
  font-size: 26px;
  margin-top: 36px;
`;

export const UserNameSir = styled.p`
  font-size: 26px;
  font-weight: 500;
  margin-right: 20px;
  margin-top: 36px;
`;

export const UserRating = styled.p`
  font-size: 22px;
  margin-top: 39px;
`;

export const Rating = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-top: 39px;
`;

export const UserId = styled.p`
  font-size: 26px;
  margin-top: 20px;
`;

export const ModifyInfo = styled.div`
  width: 131px;
  height: 38px;
  border: 2px solid ${color.inputBorder};
  border-radius: 4px;
  color: ${color.inputBorder};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 9px 14px;
  margin-left: 160px;
  margin-top: 100px;
  cursor: pointer;
`;

export const NextBtnImg = styled.img`
  width: 5px;
  height: 10px;
  margin-top: 3px;
`;

export const MyPost = styled.div`
  width: 100%;
  height: 970px;
  box-sizing: border-box;
  padding-top: 60px;
`;

export const MyPostTitle = styled.p`
  font-size: 25px;
  text-align: center;
`;

export const PostBox = styled.div`
  width: 980px;
  height: 840px;
  margin: 40px auto 0px auto;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  column-gap: 40px;
  row-gap: 40px;
`;

export const Post = styled.div`
  width: 300px;
  height: 377px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  padding: 0px 20px;
  cursor: pointer;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const PostImg = styled.img`
  width: 300px;
  height: 189px;
  margin-left: -20px;
`;

export const PostTitle = styled.p`
  width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
`;

export const PostExplain = styled.p`
  width: 260px;
  height: 95px;
  font-size: 15px;
  margin-top: 10px;
`;

export const PostWriter = styled.p`
  font-size: 16px;
`;

export const PostDate = styled.p`
  font-size: 16px;
`;

export const ModifyInfoPage = styled.div`
  width: 100%;
  height: 437px;
  background-color: #fafafa;
  box-sizing: border-box;
  padding-top: 55px;
  > div:nth-child(2) {
    width: 800px;
    height: 180px;
    margin: 0 auto;
  }
`;

export const ModifyInfoTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 35px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${color.inputBorder};
  border-radius: 3px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0px 20px;
  ::placeholder {
    font-size: 15px;
    color: ${color.explain};
  }
`;

export const StartCheckLine = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const StartCheckBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${color.explain};
  margin-right: 15px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 2px;
`;

export const SmallCheckBox = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${color.main};
  border-radius: 1px;
`;

export const StartExplain = styled.p`
  font-size: 15px;
  color: ${color.explain};
`;

export const CheckBtn = styled.div`
  width: 275px;
  height: 45px;
  border-radius: 10px;
  background-color: ${color.btnBackground};
  color: ${color.explain};
  text-align: center;
  box-sizing: border-box;
  padding: 14px 0px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 33px;
`;
