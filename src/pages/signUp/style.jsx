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

export const ReportEventAddressZipCodeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 50px;
  width: 98px;
  height: 20px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  color: #000;
  font-family: NotoSansKR_Regular;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 3px;
  letter-spacing: -0.3px;
  cursor: pointer;
`;

export const ReportEvnetAddressModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  cursor: pointer;
`;

// 행사 주소 입력
export const ReportEvnetAddressModal = styled.div`
  position: absolute;
  width: 120%;
  top: 20%;
  left: -25px;
  z-index: 999;
`;
