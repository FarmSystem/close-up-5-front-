import React from 'react';
import * as S from './style';

function TextArea(props) {
  return (
    <S.DetailWrapper>
      <S.TextArea placeholder={props.placeholder} onChange={(e) => props.getValue(e.target.value)}/>
    </S.DetailWrapper>
  );
}

export default TextArea;
