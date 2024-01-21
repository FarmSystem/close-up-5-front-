import { styled } from 'styled-components';

export const CreatorWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CreatorTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 16px;
`;

export const CreatorLogoWrapper = styled.div`
  display: flex;
  width: 80px;
  margin-top: 40px;
`;

export const CreatorLogo = styled.img`
  width: 80px;
`;
export const CreatorContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 40px;
`;
export const CreatorContentTitle = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  margin-left: 12px;
`;

export const CreatorSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border-bottom: 1px solid #b0b0b0;
  margin-bottom: 20px;
`;

export const CreatorSearch = styled.input`
  border-radius: 20px;
  border: 1px solid #8148f6;
  background: #19191c;
  box-shadow: 4px 4px 4px 0px #000;
  backdrop-filter: blur(5px);
  color: #fff;
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
`;

export const CreatorListWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  border-bottom: 1px solid #b0b0b0;
`;
export const CreatorItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 20px;
`;
export const CreatorProfile = styled.img`
  width: 44px;
  border-radius: 50%;
`;
export const CreatorNickname = styled.div`
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
`;

// 카테고리
export const CreatorCategory = styled.div`
  margin-top: 20px;
  color: #dc8ae1;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-left: 12px;
`;
