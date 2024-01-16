import React from 'react';
import * as S from './style';
import womanImage from '../../../src/assets/images/login/woman.png';
import KaKaoButton from '../../assets/images/login/kakao.png';

function LogIn() {
  const handleButtonClick = () => {
    const url = 'http://localhost:8080/oauth2/authorization/kakao';
    window.location.href = url;
  };

  return (
    <S.LogInWrapper>
      <S.LogInTitle>CLOSEUP</S.LogInTitle>

      {/* 사진과 서비스 소개 */}
      <S.LogInImg src={womanImage} />
      <S.LogInContent> 크리에이터 삶을 더 가까이</S.LogInContent>
      <S.LogInSubContent>
        다양한 래플 서비스를 통해
        <br />
        한정 크리에이터 서비스를 제공
      </S.LogInSubContent>

      {/* 카카오톡으로 로그인 */}
      <S.LogInKakaoButton src={KaKaoButton} onClick={handleButtonClick} />
    </S.LogInWrapper>
  );
}

export default LogIn;
