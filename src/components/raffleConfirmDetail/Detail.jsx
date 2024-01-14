import React from 'react';
import * as S from './style';

function Detail(props) {
    return (
        <S.DetailWrapper>
            <S.DetailWinningInfo>{props.winningInfo}</S.DetailWinningInfo>
            <S.WinningMessage>축하드립니다. 래플에 당첨되셨습니다.</S.WinningMessage>
            <S.WinningProductUrl as="a" href={props.downloadUrl}>다운로드</S.WinningProductUrl>
            <S.Divider />
            <S.TitleWrapper>
                <S.CreatorName>{props.creatorName}</S.CreatorName>
                <S.DetailRaffleProductTitle>{props.raffleProductTitle}</S.DetailRaffleProductTitle>
            </S.TitleWrapper>
            <S.DetailDate>
                {props.raffleProductStartDate} ~ {props.raffleProductEndDate}
            </S.DetailDate>
            <S.DetailContentWrapper>
                <S.DetailContentImg src={props.raffleProductThumbnailUrl || 'defaultThumbnailUrl'} />
                <S.DetailContent>
                    <S.RaffleCreateDate>{props.raffleCreateDate}</S.RaffleCreateDate>
                    <S.DetailRaffleProductContent>{props.raffleProductContent}</S.DetailRaffleProductContent>
                </S.DetailContent>
            </S.DetailContentWrapper>
            <S.ConfirmButton>확인</S.ConfirmButton>
        </S.DetailWrapper>
    );
}

export default Detail;
