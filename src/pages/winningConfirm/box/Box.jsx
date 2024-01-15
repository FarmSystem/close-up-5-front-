// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import * as S from './style';
import axios from '../../../api/axios'; 

function Box() {
  const [raffleProducts, setRaffleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          '/user/raffles/winning'
        );
        setRaffleProducts(response.data.result);
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
      <S.RaffleTitle>당첨 확인</S.RaffleTitle>
      <S.RaffleView>
        <S.RaffleViewTitle>전체 당첨 목록</S.RaffleViewTitle>
        <S.RaffleLine> </S.RaffleLine>
        {loading ? (
          <p>Loading…</p>
        ) : (
          raffleProducts.map(product => (
            <S.styledLink to={`/winningConfirm/${product.raffleId}`} key={product.raffleId}>
              <S.RaffleContents>
                <S.RaffleContentsImages src={product.raffleThumbnailUrl} />
                <S.RaffleContentslist>
                  <S.RaffleContentsTitle>
                    {product.raffleTitle}
                  </S.RaffleContentsTitle>
                  <S.RaffleContentsDate>
                    {product.raffleCreatedAt} ~ {product.raffleEndAt}
                  </S.RaffleContentsDate>
                  <S.RaffleContentsPrice>
                    {product.winningInfo}Point
                  </S.RaffleContentsPrice>
                </S.RaffleContentslist>
              </S.RaffleContents>
            </S.styledLink>
          ))
        )}
      </S.RaffleView>
    </S.BoxWrapper>
  );
}

export default Box;