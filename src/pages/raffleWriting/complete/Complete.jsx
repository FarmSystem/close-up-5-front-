import React from 'react';
import { useLocation } from 'react-router-dom';
import ColorHeader from '../../../components/raffleWriting/header/ColorHeader';
import Header from '../../../components/raffleWriting/header/Header';
import * as S from './style';

function Complete() {
  const location = useLocation();
  return (
    <>
      <Header title={'래플 폼 작성'} />
      <S.CompleteEmpty />

      <Header title={'응모일은'} />
      <S.CompleteTextEmpty />
      <ColorHeader title={location.state} />
      <S.CompleteTextEmpty />
      <Header title={'입니다.'} />
      <S.CompleteEmpty />

      <Header title={'래플 작성이 완료되었습니다.'} />

      <S.CompleteButton to="/raffle">완료</S.CompleteButton>
    </>
  );
}

export default Complete;
