import React from 'react';
import * as S from './style';

function TextLabel(props) {
  return (
    <S.DetailWrapper>
      <S.TextLabel>{props.value}</S.TextLabel>
    </S.DetailWrapper>
  );
}

export default TextLabel;
