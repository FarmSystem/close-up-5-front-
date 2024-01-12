import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import Header from '../../../components/raffleApplyment/header/Header';

// api
import axios from '../../../api/axios';

function Payment() {
  const { id } = useParams();
  const [isMpdalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // data
  const [data, setData] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/user/raffle-products/${id}/order`);
      setData(response.data.result);
      setPhoneNum(response.data.result.userPhoneNumber);
    } catch (e) {
      alert('응모 시간이 지났습니다 :(');
      navigate(`/raffle/${id}`);
    }
  };

  const onClickPayment = async () => {
    try {
      const response = await axios.post(`/user/raffle-products/${id}/order`);
      const responseData = response.data.result;

      navigate('/raffle/payment/complete', {
        state: responseData,
      });
    } catch (e) {
      // console.log(e);
      alert('포인트가 부족합니다 :(');
    }
  };

  return (
    <>
      {isMpdalOpen && (
        <S.PaymentModal>
          <S.PaymentModalTitle>이 정보가 맞으신가요?</S.PaymentModalTitle>
          <S.PaymentModalPhoneWrapper>
            <S.PaymentModalPhoneTitle>주문 번호</S.PaymentModalPhoneTitle>
            <S.PaymentModalPhone>
              {phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
            </S.PaymentModalPhone>
          </S.PaymentModalPhoneWrapper>
          <S.PaymentModalAddressTitle>주문 주소</S.PaymentModalAddressTitle>
          <S.PaymentModalAddress>{data.userAddress}</S.PaymentModalAddress>

          <S.PaymentModalButton>
            <S.PaymentModalOkay onClick={onClickPayment}>
              확인
            </S.PaymentModalOkay>
            <S.PaymentModalCancle onClick={closeModal}>
              취소
            </S.PaymentModalCancle>
          </S.PaymentModalButton>
        </S.PaymentModal>
      )}

      <Header title={'결제'} />
      {data && (
        <>
          <S.PaymentWrapper>
            <S.NicknameAndPhone>
              <S.PaymentNickname>{data.userNickname}</S.PaymentNickname>
              <S.PaymentPhone>
                {phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
              </S.PaymentPhone>
            </S.NicknameAndPhone>
            <S.PaymentAddressTitle>주소</S.PaymentAddressTitle>
            <S.PaymentAddress>{data.userAddress}</S.PaymentAddress>

            <S.PaymentPoint>포인트</S.PaymentPoint>
            <S.PaymentMoneyWrapper>
              <S.PaymentMoneyTitle>잔액</S.PaymentMoneyTitle>
              <S.PaymentMoney>{data.userPoint}</S.PaymentMoney>
            </S.PaymentMoneyWrapper>
            <S.PaymentMoneyWrapper>
              <S.PaymentMoneyTitle>결제 금액</S.PaymentMoneyTitle>
              <S.PaymentMoney>{data.raffleProductPrice}</S.PaymentMoney>
            </S.PaymentMoneyWrapper>
          </S.PaymentWrapper>
          <S.PaymentButton onClick={openModal}>결제하기</S.PaymentButton>
        </>
      )}
    </>
  );
}

export default Payment;
