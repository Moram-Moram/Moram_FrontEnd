import React from 'react';
import * as S from './style';
import { MODIFYINFO, CURRENTPASSWORD, MODIFYPASSWORD, STARTEXPLAIN } from '../../constance/mypage';

const ModifyInfo = () => {
  return (
    <S.ModifyInfoPage>
      <S.ModifyInfoTitle>{MODIFYINFO}</S.ModifyInfoTitle>
      <div>
        <S.Input placeholder={CURRENTPASSWORD} />
        <S.Input placeholder={MODIFYPASSWORD} />
        <S.StartCheckLine>
          <S.StartCheckBox>
            <S.SmallCheckBox />
          </S.StartCheckBox>
          <S.StartExplain>{STARTEXPLAIN}</S.StartExplain>
        </S.StartCheckLine>
      </div>
      <S.CheckBtn>확인하기</S.CheckBtn>
    </S.ModifyInfoPage>
  );
};

export default ModifyInfo;
