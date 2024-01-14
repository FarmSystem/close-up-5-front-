import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as S from './style';
import womanImage from '../../../src/assets/images/logo/woman.png';
import backImage from '../../../src/assets/images/back/return.png';
import axios from '../../../src/api/axios';


function LogIn() {
  const handleButtonClick = () => {
    const url = 'http://172.30.1.18:8080/oauth2/authorization/kakao';
    window.location.href = url;
  };

  return (
    <S.LogInWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 200, height: 9, left: 80, top: -100, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word' }}>CLOSEUP</div>
      <div style={{ width: 283, height: 540.24, position: 'relative' }}>

        {/* 사진과 서비스 소개 */}
        <div style={{ width: 282, height: 291, left: 0, top: 34, position: 'absolute', background: `url(${womanImage})`, backgroundSize: 'cover', borderRadius: 40 }}></div>
        <div style={{ width: 280, height: 33, left: 3, top: 369, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>크리에이터 삶을 더 가까이</div>
        <div style={{ width: 276, height: 33, left: 2, top: 411, position: 'absolute', textAlign: 'center', color: 'rgba(255, 255, 255, 0.70)', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '350', wordWrap: 'break-word' }}>다양한 래플 서비스를 통해<br />한정 크리에이터 서비스를 제공 </div>
       
        {/* 카카오톡으로 로그인 */}
        <Link to="/" onClick={handleButtonClick}>
      <div style={{ width: 279, height: 37.24, left: 3, top: 459, position: 'absolute', background: '#FFE522', borderRadius: 10 }}>
        <div style={{ width: 279, height: 37.24, left: 0, top: 0, position: 'absolute', borderRadius: 25 }} />
      </div>
      <div style={{ width: 260, height: 16, left: 21, top: 472, position: 'absolute', textAlign: 'center', color: '#3D2225', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>카카오톡으로 간편로그인</div>
    </Link>

      
      </div>
    </S.LogInWrapper>
  );
}

export default LogIn;
