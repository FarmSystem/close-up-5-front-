import React, { useEffect, useState } from 'react';
import * as S from './style';
import axios from '../../api/axios';
import ProfileDefault from '../../assets/images/raffleApplyment/defaultCreatorProfile.png';
function MyPage() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
    const jquery = document.createElement('script');
    jquery.src = 'http://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'http://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`user/profile`);
      console.log(response);
      setData(response.data.result);
    } catch (e) {
      // console.log(e);
    }
  };
  const onClickChargePoint = async amount => {
    console.log(amount);
    try {
      const response = await axios.post(`/user/point-charge?amount=${amount}`);
      setData(response.data.result);
      requestPay(
        response.data.result.merchantId,
        response.data.result.chargePoint
      );
    } catch (e) {
      alert('에러 :(');
      console.log(e);
    }
  };
  const requestPay = (merchantId, chargePoint) => {
    const IMP = window.IMP;
    IMP.init('imp31818680');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: merchantId,
        name: chargePoint + 'point',
        amount: chargePoint,
        buyer_email: 'closeup@gmail.com',
        buyer_name: 'Close Up 팀',
        buyer_tel: '010-xxxx-xxxx',
        buyer_addr: '서울특별시 중구 동국대학교',
        buyer_postcode: '123-456',
      },
      function (rsp) {
        if (rsp.success) {
          console.log(rsp.imp_uid);
          let data = {
            amount: rsp.paid_amount,
            imp_uid: rsp.imp_uid,
            merchantId: rsp.merchant_uid,
          };
          try {
            const response = axios.post(`/user/verifyIamport`, data);
            console.log(response);
            window.location.reload();
          } catch (e) {
            alert(e);
          }
        } else {
          alert('결재 실패');
          alert(rsp.error_msg);
          window.location.reload();
          console.log(rsp);
        }
      }
    );
  };
  return (
    <S.MyPageWrapper>
      <S.MyPageTitle>MY PAGE</S.MyPageTitle>
      {data && (
        <>
          <S.MyPageHeader>
            <S.MyPageProfileImg src={ProfileDefault} />
            <S.MyPageNameAndPoint>
              <S.MyPageProfileName>{data.creatorName}</S.MyPageProfileName>
              <S.MyPagePoint>포인트: {data.totalPoint}원</S.MyPagePoint>
            </S.MyPageNameAndPoint>
          </S.MyPageHeader>
          <S.MyPageContent>
            <S.MyPageContentTitle>포인트 충전</S.MyPageContentTitle>
            <S.ButtonWrapper>
              <S.Button onClick={() => onClickChargePoint(5000)}>
                5000원
              </S.Button>
              <S.Button onClick={() => onClickChargePoint(10000)}>
                10000원
              </S.Button>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.Button onClick={() => onClickChargePoint(20000)}>
                20000원
              </S.Button>
              <S.Button onClick={() => onClickChargePoint(50000)}>
                50000원
              </S.Button>
            </S.ButtonWrapper>
          </S.MyPageContent>
        </>
      )}
    </S.MyPageWrapper>
  );
}
export default MyPage;