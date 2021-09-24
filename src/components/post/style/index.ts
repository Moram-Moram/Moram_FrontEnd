import styled from 'styled-components';
import { color } from '../../../style';

export const Post = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
`;

export const PostBox = styled.div`
  width: 994px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const TitleLine = styled.div`
  width: 974px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;
`;

export const PostTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const PostDate = styled.p`
  font-size: 20px;
`;

export const BackBtn = styled.img`
  width: 21px;
  height: 23px;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background-color: ${color.light};
  margin-bottom: 10px;
`;

export const PostWriter = styled.p`
  width: 974px;
  font-size: 18px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const PostContent = styled.div`
  width: 974px;
  margin: 25px auto 25px auto;
`;

export const PostAllComment = styled.p`
  width: 974px;
  font-size: 16px;
  color: ${color.explain};
  margin: 30px auto 15px auto;
`;

export const PostCommentBox = styled.textarea`
  width: 100%;
  height: 90px;
  border: 1px solid ${color.inputBorder};
  border-radius: 3px;
  resize: none;
  font-size: 15px;
  font-weight: 300;
  box-sizing: border-box;
  padding: 5px 10px;
`;

export const PostCommentBtn = styled.div`
  width: 100px;
  height: 37px;
  background-color: ${color.btnBackground};
  border-radius: 25px;
  font-size: 15px;
  color: ${color.explain};
  text-align: center;
  box-sizing: border-box;
  padding: 10px 0px;
  margin: 15px 0px;
  position: relative;
  left: 894px;
  cursor: pointer;
`;

export const Comment = styled.div`
  width: 974px;
  margin: 0 auto;
  margin-top: 25px;
  > div {
    height: 31px;
    display: flex;
    align-items: center;
  }
`;

export const CommentProfile = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 15px;
`;

export const CommentName = styled.p`
  font-size: 18px;
`;

export const CommentContent = styled.p`
  width: 928px;
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0px 0px 46px;
`;

export const SideBar = styled.div`
  width: 111px;
  height: 248px;
  border: 3px solid ${color.light};
  border-radius: 28px;
  position: fixed;
  top: 200px;
  right: 60px;
`;

export const HeartImg = styled.img`
  width: 47px;
  height: 44px;
`;
