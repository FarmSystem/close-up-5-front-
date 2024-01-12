// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as S from './style';
import axios from '../../../api/axios';
import { Link } from 'react-router-dom'; 

function Box() {
  const [raffleProducts, setRaffleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          '/user/raffle-products?page=1&size=10'
        );
        console.log(response.data.result.content);
        setRaffleProducts(response.data.result.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <S.BoxWrapper>
      <S.RaffleTitle>래플 목록</S.RaffleTitle>
      <S.RaffleView>
        <S.RaffleViewTitle>전체 래플 목록</S.RaffleViewTitle>
        <S.RaffleLine> </S.RaffleLine>
        {loading ? (
          <p>Loading…</p>
        ) : (
          raffleProducts.map(product => (
            <S.RaffleContents key={product.raffleProductId}>
              <Link to={`/raffle/${product.raffleProductId}`}></Link>
              <S.RaffleContentsImages src={product.raffleProductThumbnail} />
              <S.RaffleContentslist>
                <S.RaffleContentsTitle>
                  {product.raffleProductTitle}
                </S.RaffleContentsTitle>
                <S.RaffleContentsDate>
                  {product.startDate} ~ {product.endDate}
                </S.RaffleContentsDate>
                <S.RaffleContentsPrice>
                  {product.raffleProductPrice}Point
                </S.RaffleContentsPrice>
              </S.RaffleContentslist>
            </S.RaffleContents>
          ))
        )}
      </S.RaffleView>
    </S.BoxWrapper>
  );
}

export default Box;