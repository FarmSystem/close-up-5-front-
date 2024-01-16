import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogInTitle = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 15px;
`;

export const LogInImg = styled.img`
  width: 282px;
  height: 291px;
`;

export const LogInContent = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-top: 44px;
`;

export const LogInSubContent = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 14px;
  font-weight: 350;
  line-height: normal;
  margin-top: 10px;
`;

export const LogInKakaoButton = styled.img`
  display: flex;
  width: 279px;
  height: 50px;
  margin-top: 32px;
  cursor: pointer;
`;
