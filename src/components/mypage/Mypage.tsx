import React from 'react';
import Header from '../header';
import ShowInfo from './ShowInfo';
import MyPost from './MyPost';
import ModifyInfo from './ModifyInfo';
import * as S from './style';

const Mypage = () => {
  return (
    <S.Mypage>
      <Header />
      <ShowInfo />
      {/* <ModifyInfo /> */}
      <MyPost />
    </S.Mypage>
  );
};

export default Mypage;
