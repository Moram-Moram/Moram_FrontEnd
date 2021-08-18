import React from 'react';
import * as S from './style';
import { userProfile, nextBtn } from '../../assets/mypage';

const ShowInfo = () => {
  return (
    <S.ShowInfo>
      <div>
        <S.UserProfileImg src={userProfile} />
        <div>
          <div>
            <S.UserName>혜준아</S.UserName>
            <S.UserNameSir>님</S.UserNameSir>
            <S.UserRating>물방울</S.UserRating>
            <S.Rating>등급</S.Rating>
          </div>
          <S.UserId>RNSAJSHA00</S.UserId>
        </div>
        <S.ModifyInfo>
          <p>정보수정</p>
          <S.NextBtnImg src={nextBtn} />
        </S.ModifyInfo>
      </div>
    </S.ShowInfo>
  );
};

export default ShowInfo;
