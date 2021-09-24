import React from 'react';
import * as S from './style';
import Header from '../header';
import { fillHeart, emptyHeart, report, backBtn, CommentProfile } from '../../assets/post';

const Post = () => {
  return (
    <S.Post>
      <Header />
      <S.PostBox>
        <S.BackBtn src={backBtn} />
        <S.TitleLine>
          <S.PostTitle>제목</S.PostTitle>
          <S.PostDate>2021-08-19</S.PostDate>
        </S.TitleLine>
        <S.Line />
        <S.Line />
        <S.PostWriter>작성자</S.PostWriter>
        <S.Line />
        <S.Line />
        <S.PostContent></S.PostContent>
        <S.Line />
        <S.PostAllComment>05개</S.PostAllComment>
        <S.PostCommentBox />
        <S.PostCommentBtn>작성하기</S.PostCommentBtn>
        <S.Line />
        <S.Comment>
          <div>
            <S.CommentProfile src={CommentProfile} />
            <S.CommentName>작성자</S.CommentName>
          </div>
          <S.CommentContent>댓글 내용</S.CommentContent>
        </S.Comment>
        <S.Comment>
          <div>
            <S.CommentProfile src={CommentProfile} />
            <S.CommentName>작성자</S.CommentName>
          </div>
          <S.CommentContent>댓글 내용</S.CommentContent>
        </S.Comment>
      </S.PostBox>
      <S.SideBar>
        <S.HeartImg src={emptyHeart} />
      </S.SideBar>
    </S.Post>
  );
};

export default Post;
