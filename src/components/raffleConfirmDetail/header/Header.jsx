import React from 'react';
import * as S from './style';
import Back from '../../common/back/Back';

function Header(props) {
  return (
    <S.HeaderWrapper>
      <S.HeaderBack>
        <Back />
      </S.HeaderBack>
      <S.HeaderTitle>{props.title}</S.HeaderTitle>
    </S.HeaderWrapper>
  );
}

export default Header;
