import React from 'react';

import * as S from './style';
import raffleImg from '../../../assets/images/raffleApplyment/defaultRaffleImg.png';
import ProfileImg from '../../../assets/images/raffleApplyment/defaultCreatorProfile.png';

function Detail(props) {
  return (
    <S.DetailWrapper>
      <S.DetailTitle>
        [{props.profileName}] {props.title}
      </S.DetailTitle>
      <S.DetailDate>
        {props.startDate} ~ {props.endDate}
      </S.DetailDate>
      <S.DetailContentWrapper>
        {props.raffleImg ? (
          <S.DetailContentImg src={props.raffleImg} />
        ) : (
          <S.DetailContentImg src={raffleImg} />
        )}

        <S.DetailContentHeader>
          <S.DetailContentPrice>
            응모 금액: {props.price}원
          </S.DetailContentPrice>
          <S.DetailContentProfile>
            {props.profileImg ? (
              <S.DetailContentProfileImg src={props.profileImg} />
            ) : (
              <S.DetailContentProfileImg src={props.ProfileImg} />
            )}
            <S.DetailContentProfileName>
              {props.profileName}
            </S.DetailContentProfileName>
          </S.DetailContentProfile>
        </S.DetailContentHeader>
        <S.DetailContent>{props.content}</S.DetailContent>
      </S.DetailContentWrapper>
      <S.ApplyButton to={`/raffle/${props.id}/payment`}>신청하기</S.ApplyButton>
    </S.DetailWrapper>
  );
}

export default Detail;
