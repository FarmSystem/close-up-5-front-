import React from 'react';
import * as S from './style';

function CancelButton(props) {
  return (
    <>
      <S.CancelButton>{props.text}</S.CancelButton>
    </>
  );
}

export default CancelButton;
