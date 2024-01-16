import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/images/back/return.png';

function Back(props) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(props.link || -1);
  };

  return (
    <S.BackWrapper>
      <S.BackCircle onClick={onClickButton}>
        <S.BackIcon src={BackIcon} />
      </S.BackCircle>
    </S.BackWrapper>
  );
}

export default Back;
