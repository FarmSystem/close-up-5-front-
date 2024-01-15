import React from 'react';
import { useState } from 'react';
import * as S from './style';

function Selectbox(props) {
  const [currentValue, setCurrentValue] = useState("사진");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
    props.getValue(e.target.value)
  };

  return (
    <S.SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <S.Label>{currentValue}</S.Label>
      <S.SelectOptions show={showOptions}>
      <S.Option onClick={handleOnChangeSelectValue} value={3}>사진</S.Option>
        <S.Option onClick={handleOnChangeSelectValue} value={4}>영상</S.Option>
        <S.Option onClick={handleOnChangeSelectValue} value={5}>음성 파일</S.Option>
        <S.Option onClick={handleOnChangeSelectValue} value={6}>손편지</S.Option>
        <S.Option onClick={handleOnChangeSelectValue} value={7}>굿즈</S.Option>
        <S.Option onClick={handleOnChangeSelectValue} value={8}>소장품</S.Option>
      </S.SelectOptions>
    </S.SelectBox>
  );
}

export default Selectbox;
