import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Landing from './pages/landing/Landing';
import WinningConfirmBox from './pages/winningConfirm/box/Box.jsx';
import RaffleBox from './pages/raffle/box/Box.jsx';
import Creator from './pages/creator/Creator.jsx';
import Setting from './pages/setting/Setting.jsx';
import RaffleWriting from './pages/raffleWriting/writing/Writing.jsx';
import RaffleWritingComplete from './pages/raffleWriting/complete/Complete.jsx';
import RaffleDetail from './pages/raffle/detail/Detail.jsx';
import RaffleWinningConfirmDetail from './pages/winningConfirm/detail/Detail.jsx';
import RafflePayment from './pages/raffle/payment/Payment.jsx';
import RafflePaymentComplete from './pages/raffle/payment/complete/Complete.jsx';
import MyPage from './pages/myPage/MyPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/winningConfirm',
        element: <WinningConfirmBox />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/raffle',
        element: <RaffleBox />,
      },
      {
        path: '/creator',
        element: <Creator />,
      },
      {
        path: '/raffleWriting',
        element: <RaffleWriting />,
      },
      {
        path: '/raffleWriting/complete',
        element: <RaffleWritingComplete />,
      },
      {
        path: '/raffle/:id',
        element: <RaffleDetail />,
      },
      {
        path: '/raffle/:id/payment',
        element: <RafflePayment />,
      },
      {
        path: '/raffle/payment/complete',
        element: <RafflePaymentComplete />,
      },
      {
        path: '/winningConfirm/detail',
        element: <RaffleWinningConfirmDetail />,
      },
    ],
  },
]);

export default router;
