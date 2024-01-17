import React from 'react';
import * as S from './style';

function Detail(props) {
  const startDate = props.raffleProductStartDate.split('T')[0];
  const endDate = props.raffleProductEndDate.split('T')[0];
  const createDate = props.raffleCreateDate.split('T')[0];

  return (
    <S.DetailWrapper>
      {props.winningInfo == 'WINNING' ? (
        <>
          축하드립니다. <br />
          래플에 당첨되셨습니다.
        </>
      ) : (
        <></>
      )}

      <S.DetailWinningInfo>{props.winningInfo}</S.DetailWinningInfo>
      <S.WinningMessage>
        축하드립니다. <br />
        래플에 당첨되셨습니다.
      </S.WinningMessage>
      <S.WinningProductUrl as="a" href={props.downloadUrl}>
        다운로드
      </S.WinningProductUrl>
      <S.Divider />

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
      </S.DetailContentWrapper>
      <S.ConfirmButton>확인</S.ConfirmButton>
    </S.DetailWrapper>
  );
}

export default Detail;
