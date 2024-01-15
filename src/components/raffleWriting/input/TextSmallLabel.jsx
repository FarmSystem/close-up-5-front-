import React from 'react';
import * as S from './style';

function TextSmallLabel(props) {
  return (
    <S.DetailWrapper>
      <S.TextSmallLabel>{props.value}</S.TextSmallLabel>
    </S.DetailWrapper>
  );
}

export default TextSmallLabel;
