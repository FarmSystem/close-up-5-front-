import { styled } from 'styled-components';

export const MyPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MyPageTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
export const MyPageHeader = styled.div`
  display: flex;
  align-items: center;
  width: 267px;
  margin: 17px;
  border-bottom: 1px solid #fff;
  padding-bottom: 15px;
`;
export const MyPageProfileImg = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
`;
export const MyPageNameAndPoint = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const MyPageProfileName = styled.div`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
export const MyPagePoint = styled.div`
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const MyPageContent = styled.div`
  display: flex;
  width: 267px;
  min-height: 470px;
  flex-direction: column;

  align-items: center;
  border-radius: 10px;
  border: 1px solid #8148f6;
  background: #19191c;
  box-shadow: 4px 4px 4px 0px #000;
  backdrop-filter: blur(5px);
`;
export const MyPageContentTitle = styled.div`
  margin-top: 16px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 20px;
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
  border-radius: 20px;
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  box-shadow: 4px 4px 4px #000;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;
`;

export const LogoutButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  width: 240px;
  height: 34.077px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #7d3af1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
