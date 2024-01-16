import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import NavBar from './components/layouts/NavBar.jsx';
import BackGroundImg from './assets/images/background/background.png';
import PlanetIcon from './assets/images/background/planet.png';
import NebulaIcon from './assets/images/background/nebula.png';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  background-color: white;
  background-repeat: repeat;
  background-image: url(${BackGroundImg}); /* 이미지 경로를 정확히 지정해야 합니다. */
  background-size: cover;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  border-radius: 15px;
  margin-top: -25px;
  ${({ theme }) =>
    theme !== '/' &&
    `
    border: 1px solid rgba(117, 119, 132, 0.25);
    background: rgba(25, 25, 28, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 4px 0px #000;
  `}
`;

const Back = styled.div``;
const PlanetIconWrap = styled.img`
  width: 50px;
  margin-top: 12px;
  position: absolute;
  z-index: 1;
  display: ${({ theme }) => (theme === '/' ? 'none' : 'block')};
`;
const NebulaIconWrap = styled.img`
  width: 360px;
  position: relative;
  margin-top: -55px;
  display: ${({ theme }) => (theme === '/' ? 'none' : 'block')};
`;

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Back>
        <Wrapper>
          <PlanetIconWrap src={PlanetIcon} theme={location.pathname} />
          <NebulaIconWrap src={NebulaIcon} theme={location.pathname} />
          <Content theme={location.pathname}>
            <Outlet />
          </Content>
          <NavBar />
        </Wrapper>
      </Back>
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
