import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import closeupImage from '../../../src/assets/images/logo/closeup.png'


function Landing() {
  return (
    <S.LandingWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link to="/login">
        <div style={{ position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}>
          <img style={{ width: 140, height: 220 }} src={closeupImage} alt="Closeup" />
        </div>
      </Link>
    </S.LandingWrapper>
  );
}

export default Landing;
