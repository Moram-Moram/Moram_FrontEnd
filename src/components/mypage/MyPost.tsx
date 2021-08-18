import React from 'react';
import * as S from './style';
import { MYPOST } from '../../constance/mypage';

const MyPost = () => {
  return (
    <S.MyPost>
      <S.MyPostTitle>{MYPOST}</S.MyPostTitle>
      <S.PostBox>
        <S.Post>
          <S.PostImg src='./' />
          <S.PostTitle>귀여운 호랑이 같은 강아지 소개 합니다!</S.PostTitle>
          <S.PostExplain>진짜 장난아니게 귀엽다구여</S.PostExplain>
          <div>
            <S.PostWriter>혜준아</S.PostWriter>
            <S.PostDate>2021.05.20</S.PostDate>
          </div>
        </S.Post>
      </S.PostBox>
    </S.MyPost>
  );
};

export default MyPost;
