import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RaffleLine = styled.div`
  background-color: #3e3949;
  height: 1px;
  width: 347px;
  margin-top: 10px;
  margin-botton: 10px;
`;

export const RaffleTitle = styled.b`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 20px;
`;

export const RaffleView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RaffleViewTitle = styled.b`
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
  line-height: 20px;
  font-weight: 400;
`;

export const RaffleContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const RaffleContentsImages = styled.img`
  width: 110px;
  object-fit: cover;
  height: 60px;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 10px;
  margin-botton: 10px;
`;

export const RaffleContentsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RaffleContentsTitle = styled.div`
  color: #fff;
  font-size: 20px;
  line-height: 20px;
`;

export const RaffleContentsDate = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 16px;
`;

export const RaffleContentsPrice = styled.div`
  background-color: #5d00ff;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  line-width: 30px;
  padding: 5px 15px;
  display: inline-block;
  border-radius: 10px;
`;

export const RaffleContentslist = styled.div`
  color: #fff;
  flex-direction: column;
`;

export const Button = styled.div`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  line-height: 20px;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const StyledLink = styled(Link)``;
