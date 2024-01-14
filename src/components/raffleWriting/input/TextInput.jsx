import React from 'react';
import * as S from './style';

function TextInput(props) {
  return (
    <S.DetailWrapper>
      <S.TextInput placeholder={props.placeholder} onChange={(e) => props.getValue(e.target.value)}/>
    </S.DetailWrapper>
  );
}

export default TextInput;
