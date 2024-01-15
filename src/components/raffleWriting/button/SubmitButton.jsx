import React from 'react';
import * as S from './style';

function SubmitButton(props) {
  const onClickEvent = () => {
    props.onClickEvent();
  }
  return (
    <>
      <S.SubmitButton onClick={onClickEvent}>{props.text}</S.SubmitButton>
    </>
  );
}

export default SubmitButton;
