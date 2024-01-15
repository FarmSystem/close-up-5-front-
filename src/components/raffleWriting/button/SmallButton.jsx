import React from 'react';
import * as S from './style';

function SmallButton(props) {
  return (
    <>
      <S.SmallButton>{props.text}</S.SmallButton>
    </>
  );
}

export default SmallButton;
