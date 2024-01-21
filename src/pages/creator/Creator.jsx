import React from 'react';
import * as S from './style';

import Logo from '../../assets/images/creator/logo.png';
import Creator1 from '../../assets/images/creator/creator1.png';

import Creator2 from '../../assets/images/creator/creator2.png';

import Creator3 from '../../assets/images/creator/creator3.png';
function Creator() {
  return (
    <S.CreatorWrapper>
      <S.CreatorTitle>크리에이터</S.CreatorTitle>
      <S.CreatorLogoWrapper>
        <S.CreatorLogo src={Logo} />
      </S.CreatorLogoWrapper>
      <S.CreatorContentWrapper>
        <S.CreatorContentTitle>크리에이터 검색</S.CreatorContentTitle>
        <S.CreatorSearchWrapper>
          <S.CreatorSearch></S.CreatorSearch>
        </S.CreatorSearchWrapper>
        {/* <S.CreatorSearch src={Creator1} /> */}
        <S.CreatorContentTitle>
          회원님이 팔로우한 크리에이터
        </S.CreatorContentTitle>
        <S.CreatorListWrapper>
          <S.CreatorItem>
            <S.CreatorProfile src={Creator1} />
            <S.CreatorNickname>감스트</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={Creator2} />
            <S.CreatorNickname>주우재</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={Creator3} />
            <S.CreatorNickname>도티</S.CreatorNickname>
          </S.CreatorItem>
        </S.CreatorListWrapper>
      </S.CreatorContentWrapper>
    </S.CreatorWrapper>
  );
}

export default Creator;
