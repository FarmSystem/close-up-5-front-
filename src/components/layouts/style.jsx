import { styled } from 'styled-components';
import { useLocation, NavLink } from 'react-router-dom';
import { GoPerson, GoGift } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { LiaFireSolid } from 'react-icons/lia';
import { PiPencilSimpleLine } from 'react-icons/pi';

export const NavBarWrapper = styled.nav`
  width: 99%;
  height: 66px;
  display: flex;
  border-top: solid 1px grey;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  z-index: 10;
  border-radius: 20px;
  border: 2px solid #7c2cff;
  background: #19191c;
`;

export const NavTitle = styled.div`
  margin-top: 5px;
  color: #514e57;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const NavTab = styled(NavLink)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration-line: none;

  &.active {
    * {
      color: #8148f6;
    }
  }
`;

export const StyledGoPerson = styled(GoPerson)`
  font-size: 25px;
  color: #514e57;
`;

export const StyledGoGift = styled(GoGift)`
  font-size: 25px;
  color: #514e57;
`;

export const StyledIoIosMore = styled(IoIosMore)`
  font-size: 25px;
  color: #514e57;
`;

export const StyledpiPencilSimpleLine = styled(PiPencilSimpleLine)`
  font-size: 27px;
  color: #514e57;
`;

export const StyledLiaFireSolid = styled(LiaFireSolid)`
  font-size: 30px;
  color: #514e57;
  margin-bottom: -3px;
`;
