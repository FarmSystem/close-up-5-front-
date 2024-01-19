import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

function Detail(props) {
  const startDate = props.raffleProductStartDate.split('T')[0];
  const endDate = props.raffleProductEndDate.split('T')[0];
  const createDate = props.raffleCreateDate.split('T')[0];
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };

  const excelDownload = async url => {
    // 1. fetch 실행이 끝나면 FETCH API는 내부적으로 Body Object를 상속받아 Response 인스턴스를 생성
    const res = await fetch(url);
    // 2. blob() 메소드는 Body Object의 메서드로 상속이 되어있으므로 res.blob() 가능, blob 인스턴스 반환
    const blob = await res.blob();
    // 3. 여기서 이 작업을 해주지않으면 link.download에 있는 파일명으로 다운로드하지 못한다.
    // createObjectURL()는 URL을 DOMString으로 반환한다. (URL 해제는 revokeObjectURL())
    const downloadUrl = window.URL.createObjectURL(blob); // 이 과정이 필요하다.
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'raffle';
    link.click();
  };

  return (
    <S.DetailWrapper>
      {props.winningInfo == 'WINNING' && (
        <>
          <S.MessageWrapper>
            <S.DetailWinningInfo>당첨</S.DetailWinningInfo>
            <S.WinningMessage>
              축하드립니다! <br />
              래플에 당첨되셨습니다🎉
            </S.WinningMessage>
          </S.MessageWrapper>
          <S.WinningProductUrl
            onClick={() => excelDownload(props.winningProductUrl)}
          >
            다운로드
          </S.WinningProductUrl>
          <S.Divider />
        </>
      )}

      {props.winningInfo == 'LOSE' && (
        <>
          <S.MessageLoseWrapper>
            <S.DetailLoseInfo>미당첨</S.DetailLoseInfo>
            <S.WinningMessage>아쉽게도 당첨되지 않았습니다.</S.WinningMessage>
          </S.MessageLoseWrapper>
        </>
      )}

      <S.TitleWrapper>
        <S.DetailRaffleProductTitle>
          [{props.creatorName}] &nbsp; {props.raffleProductTitle}
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
