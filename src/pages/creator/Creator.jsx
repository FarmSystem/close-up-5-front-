import React from 'react';
import * as S from './style';

import Logo from '../../assets/images/creator/logo.png';
import Creator1 from '../../assets/images/creator/creator1.png';
import Creator2 from '../../assets/images/creator/creator2.png';
import Creator3 from '../../assets/images/creator/creator3.png';

import YoutubeIcon from '../../assets/images/creator/youtube.png';
import InstaIcon from '../../assets/images/creator/insta.png';
import TiktokIcon from '../../assets/images/creator/tiktok.png';
import TwitchIcon from '../../assets/images/creator/twitch.png';
import AfreecaIcon from '../../assets/images/creator/afreeca.png';

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
          <S.CreatorSearchIcon />
          <S.CreatorSearch />
        </S.CreatorSearchWrapper>
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

        {/* 카테고리 */}
        <S.CreatorCategory>카테고리</S.CreatorCategory>
        <S.CreatorListWrapper>
          <S.CreatorItem>
            <S.CreatorProfile src={TwitchIcon} />
            <S.CreatorNickname>트위치</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={TiktokIcon} />
            <S.CreatorNickname>TikTok</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={YoutubeIcon} />
            <S.CreatorNickname>Youtube</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={InstaIcon} />
            <S.CreatorNickname>Instagram</S.CreatorNickname>
          </S.CreatorItem>

          <S.CreatorItem>
            <S.CreatorProfile src={AfreecaIcon} />
            <S.CreatorNickname>아프리카TV</S.CreatorNickname>
          </S.CreatorItem>
        </S.CreatorListWrapper>
      </S.CreatorContentWrapper>
    </S.CreatorWrapper>
  );
}

export default Creator;
