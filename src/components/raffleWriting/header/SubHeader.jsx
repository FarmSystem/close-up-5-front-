import React from 'react';
import * as S from './style';

function SubHeader(props) {
  return (
    <S.SubHeaderWrapper>
      <S.SubHeaderTitle>{props.title}</S.SubHeaderTitle>
    </S.SubHeaderWrapper>
  );
}

export default SubHeader;
