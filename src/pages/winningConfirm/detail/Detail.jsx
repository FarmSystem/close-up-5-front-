import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/raffleConfirmDetail/header/Header';

// import Header from '../../../components/raffleApplyment/header/Header';
import RaffleConfirmDetail from '../../../components/raffleConfirmDetail/Detail';

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
      <Header title={'축하드립니다. 래플에 당첨되셨습니다.'} />
      {data && (
        <RaffleConfirmDetail
          winningInfo={data.winningInfo} //
          raffleCreateDate={data.raffleCreateDate}
          raffleProductStartDate={data.raffleProductStartDate}
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