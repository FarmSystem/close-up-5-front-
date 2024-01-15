import React from 'react';
import { useState } from 'react';
import * as S from './style';

function TextNumber(props) {
  const [num, setNum] = useState(props.default);
  const increase = () => {
    setNum(num + 1);
    props.getValue(num + 1);
  };
  const decrease = () => {
    setNum(num - 1);
    props.getValue(num - 1);
  };
  
    return (
      <S.TextNumberArea>
      <S.NumberButton onClick={decrease}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <g clip-path="url(#clip0_387_2081)">
            <path d="M19.7917 13.5417H5.20833V11.4584H19.7917V13.5417Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_387_2081">
              <rect width="25" height="25" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        </S.NumberButton>
        <S.TextNumber type="number" defaultValue={num} value={num}/>
        <S.NumberButton onClick={increase}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_387_2005)">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_387_2005">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </S.NumberButton>
      </S.TextNumberArea>
    );
}

export default TextNumber;
