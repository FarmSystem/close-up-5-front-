import { styled } from 'styled-components';

export const MyPageWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  height: 25px;
  fill: #19191c;
  stroke-width: 1px;
  border: 1px solid #8148f6;
  filter: drop-shadow(4px 4px 4px #000);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`;
