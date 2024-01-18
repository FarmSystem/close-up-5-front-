import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function Detail(props) {
  const startDate = props.raffleProductStartDate.split('T')[0];
  const endDate = props.raffleProductEndDate.split('T')[0];
  const createDate = props.raffleCreateDate.split('T')[0];
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };
  return (
    <S.DetailWrapper>
      {props.winningInfo == 'WINNING' ? (
        <>
          <S.MessageWrapper>
            <S.DetailWinningInfo>당첨</S.DetailWinningInfo>
            <S.WinningMessage>
              축하드립니다! <br />
              래플에 당첨되셨습니다🎉
            </S.WinningMessage>
          </S.MessageWrapper>
          <S.WinningProductUrl as="a" href={props.downloadUrl}>
            다운로드
          </S.WinningProductUrl>
          <S.Divider />
        </>
      ) : (
        <>
          <S.MessageLoseWrapper>
            <S.DetailLoseInfo>미당첨</S.DetailLoseInfo>
            <S.WinningMessage>아쉽게도 당첨되지 않았습니다.</S.WinningMessage>
          </S.MessageLoseWrapper>
        </>
      )}

      <S.TitleWrapper>
        <S.CreatorName>[{props.creatorName}] &nbsp; </S.CreatorName>
        <S.DetailRaffleProductTitle>
          {props.raffleProductTitle}
        </S.DetailRaffleProductTitle>
      </S.TitleWrapper>
      <S.DetailDate>
        {startDate} ~ {endDate}
      </S.DetailDate>
      <S.DetailContentWrapper>
        <S.DetailContentImg
          src={props.raffleProductThumbnailUrl || 'defaultThumbnailUrl'}
        />
        <S.DetailContent>
          <S.RaffleCreateDate>응모 일자 : {createDate}</S.RaffleCreateDate>
          <S.DetailRaffleProductContent>
            {props.raffleProductContent}
          </S.DetailRaffleProductContent>
        </S.DetailContent>
        <S.ConfirmButton onClick={onClickButton}>확인</S.ConfirmButton>
      </S.DetailContentWrapper>
    </S.DetailWrapper>
  );
}

export default Detail;
