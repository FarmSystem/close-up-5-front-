import React from 'react';
import * as S from './style';

function ColorHeader(props) {
  return (
    <S.HeaderWrapper>
      <S.ColorHeader>{props.title}</S.ColorHeader>
    </S.HeaderWrapper>
  );
}

export default ColorHeader;
