import * as S from './style';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Header from '../../../components/raffleApplyment/header/Header';
import RaffleConfirmDetail from '../../../components/raffleConfirmDetail/Detail';
import ProfileImg from '../../../assets/images/raffleApplyment/profile.png';

// api
import axios from '../../../api/axios';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/user/raffles/${id}`);
      setData(response.data.result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {data && (
        <RaffleConfirmDetail
          winningInfo={data.winningInfo} //
          raffleCreateDate={data.raffleCreateDate}
          endDraffleProductStartDateate={data.raffleProductStartDate}
          raffleProductEndDate={data.raffleProductEndDate}
          raffleProductTitle={data.raffleProductTitle}
          raffleProductThumbnailUrl={data.raffleProductThumbnailUrl}
          raffleProductContent={data.raffleProductContent}
          creatorName={data.creatorName}
          winningProductUrl={data.winningProductUrl}
          raffleWinningDate={data.raffleWinningDate}
        />
      )}
    </>
  );
}

export default Detail;
