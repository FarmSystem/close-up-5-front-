import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import * as S from './style';
import closeupImage from '../../../src/assets/images/logo/closeup.png';
const moveUpAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
`;

const LandingImage = styled.img`
  width: 140px;
  height: 220px;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  animation: ${moveUpAnimation} 1s ease-in-out forwards;
`;

function Landing() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <LandingImage src={closeupImage} alt="Closeup" />;
}

export default Landing;
