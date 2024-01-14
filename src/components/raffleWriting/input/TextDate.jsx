import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as S from './style';

function TextDate(props) {
  // const showDate = useRef();
  // const [dateValue, setDateValue] = useState(new Date().getFullYear());

  // const setDate = () => {
  //   showDate.current.click();
  // }

  return (
    <S.DetailWrapper>
      {/* <S.TextLabel onClick={setDate}>{dateValue}</S.TextLabel> */}
      {/* <input ref={showDate} type="date" style={{display: 'none'}} onChange={setDateValue}  /> */}
      <input type="date" onChange={(e) => props.getValue(e.target.value)}></input>
    </S.DetailWrapper>
  );
}

export default TextDate;
