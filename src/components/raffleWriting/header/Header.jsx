import React from 'react';
import * as S from './style';

function Header(props) {
  return (
    <S.HeaderWrapper>
      <S.HeaderTitle>{props.title}</S.HeaderTitle>
    </S.HeaderWrapper>
  );
}

export default Header;
