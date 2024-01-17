import styled from 'styled-components';

export const DetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: flex-start;
  margin-top: 20px;
`;

export const DetailWinningInfo = styled.div`
  background: #5d00ff;
  box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 40px;
  padding: 1px 12px;
  position: absolute;
  left: 20px;
`;

export const WinningMessage = styled.div`
  display: flex;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 5px;
  text-align: center;
`;

export const WinningProductUrl = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 27px;
  background: linear-gradient(213deg, #7d3af1 32.82%, #dc8ae1 84.65%);
  box-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 40px;
  margin-top: 20px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #b0b0b05c;
  margin: 20px 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CreatorName = styled.div`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const DetailRaffleProductTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const DetailDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 50px;
  background-color: #5d00ff;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 40px;
  text-align: center;
`;

export const DetailContentWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border-radius: 20px;
`;

export const DetailContentImg = styled.img`
  width: 100%;
  height: 144px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

export const DetailContent = styled.div`
  color: #fff;
  font-size: 9px;
  font-weight: 400;
  line-height: 20px;
  /* margin: 10px 20px; */
`;

export const RaffleCreateDate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #d9d9d9;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 10px;
`;

export const DetailRaffleProductContent = styled.div`
  margin-top: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
`;

export const ConfirmButton = styled.button`
  /* 스타일 정의 */
`;
