import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 20px;
  width: 247px;
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
  margin-top: 10px;
`;

export const DetailContentWrapper = styled.div`
  display: flex;
  width: 273px;
  min-height: 321px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid #8148f6;
  box-shadow: 0px 0px 4px 0px #000;
  backdrop-filter: blur(5px);
`;

export const DetailContentImg = styled.img`
  width: 247px;
  height: 128px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

export const DetailContentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;
export const DetailContentPrice = styled.div`
  color: #dc8ae1;
  width: 100%;
  display: flex;
  margin-left: 20px;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
export const DetailContentProfile = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
`;
export const DetailContentProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const DetailContentProfileName = styled.div`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
export const DetailContent = styled.div`
  color: #fff;
  font-size: 9px;
  font-weight: 400;
  line-height: 20px;
  margin: 10px 0px;
  display: flex;
  width: 234px;
`;
export const ApplyButton = styled(Link)`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 273px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: linear-gradient(213deg, #7d3af1 32.82%, #dc8ae1 84.65%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 16px;
  cursor: pointer;
`;
