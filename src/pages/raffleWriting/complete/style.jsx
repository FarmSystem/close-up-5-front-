import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CompleteWrapper = styled.div`
  display: flex;
`;

export const CompleteEmpty = styled.div`
  padding-top: 89px;
`;

export const CompleteTextEmpty = styled.div`
  padding-top: 20px;
`;

export const CompleteButton = styled(Link)`
  display: flex;
  position: absolute;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background: #7d3af1;
  box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  bottom: 40px;
`;
