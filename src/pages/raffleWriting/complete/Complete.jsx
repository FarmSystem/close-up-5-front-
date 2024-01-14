import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/raffleWriting/header/Header';
import * as S from './style';

function Complete() {
  const location = useLocation();
  return (
    <>
       <Header title={'래플 폼 작성'} />
       <Header title={'응모일은'} />
       <Header title={location.state} />
       <Header title={'입니다.'} />
       <Header title={'래플 작성이 완료되었습니다.'} />
    </>
  )
}

export default Complete;
