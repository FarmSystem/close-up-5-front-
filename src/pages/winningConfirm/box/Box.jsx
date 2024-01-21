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
        const response = await axios.get('/user/raffles');
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
            <S.StyledLink
              to={`/winningConfirm/${product.raffleId}`}
              key={product.raffleId}
            >
              <S.RaffleContents>
                <S.RaffleContentsImages src={product.raffleThumbnailUrl} />
                <S.RaffleContentslist>
                  <S.RaffleContentsTitle>
                    {product.raffleTitle}
                  </S.RaffleContentsTitle>
                  <S.RaffleContentsDate>
                    {product.raffleCreatedAt} ~ {product.raffleEndAt}
                  </S.RaffleContentsDate>

                  {/* {product.winningInfo === 'NONE' && (
                    <>
                      <S.RaffleNone>{product.winningInfo}</S.RaffleNone>
                    </>
                  )} */}

                  {product.winningInfo === 'LOSE' && (
                    <>
                      <S.RaffleLose>미당첨</S.RaffleLose>
                    </>
                  )}

                  {product.winningInfo === 'WINNING' && (
                    <>
                      <S.RaffleWinning>당첨</S.RaffleWinning>
                    </>
                  )}
                </S.RaffleContentslist>
              </S.RaffleContents>
            </S.StyledLink>
          ))
        )}
      </S.RaffleView>
    </S.BoxWrapper>
  );
}

export default Box;
