import React from 'react';
import * as S from './style';
import { useLocation, NavLink } from 'react-router-dom';
import CreatorIcon from '../../assets/images/nav/creator.png';
import RaffleIcon from '../../assets/images/nav/raffle.png';
import WinningIcon from '../../assets/images/nav/winning.png';
import SettingIcon from '../../assets/images/nav/setting.png';
import ActiveCreatorIcon from '../../assets/images/nav/active_creator.png';
import ActiveRaffleIcon from '../../assets/images/nav/active_raffle.png';
import ActiveWinningIcon from '../../assets/images/nav/active_winning.png';
import ActiveSettingIcon from '../../assets/images/nav/active_setting.png';

function NavBar() {
  // const location = useLocation();
  // const isLandingPage = location.pathname === '/';

  // if (isLandingPage) {
  //   return null;
  // }

  return (
    <S.NavBarWrapper>
      <S.NavTab to="/creator">
        <S.StyledGoPerson />
        <S.NavTitle>크리에이터</S.NavTitle>
      </S.NavTab>

      <S.NavTab to="/raffle">
        <S.StyledLiaFireSolid />
        <S.NavTitle>래플</S.NavTitle>
      </S.NavTab>

      <S.NavTab to="/winningConfirm">
        <S.StyledGoGift />
        <S.NavTitle>당첨 확인</S.NavTitle>
      </S.NavTab>

      <S.NavTab to="/mypage">
        <S.StyledIoIosMore />
        <S.NavTitle>설정</S.NavTitle>
      </S.NavTab>
    </S.NavBarWrapper>
  );
}

export default NavBar;
