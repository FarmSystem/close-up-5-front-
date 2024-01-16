import { styled } from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const SignUpClickedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 26px;
  position: absolute;
  left: 0px;
  top: 0px;
  background: linear-gradient(213deg, #7d3af1 0%, #dc8ae1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 12px;
  font-weight: 700;
  backdrop-filter: blur(4px);
  border-radius: 5px;
  cursor: pointer;
`;

export const SignUpUnClickedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 26px;
  position: absolute;
  left: 140px;
  top: 0px;
  background: linear-gradient(213deg, #464646 32.82%, #464646 84.65%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 12px;
  font-weight: 700;
  backdrop-filter: blur(2px);
  border-radius: 5px;
`;
