import React from 'react';
import * as S from './style';
import Header from '../../../components/raffleWriting/header/Header';
import Selectbox from '../../../components/raffleWriting/input/Selectbox';
import TextInput from '../../../components/raffleWriting/input/TextInput';
import TextLabel from '../../../components/raffleWriting/input/TextLabel';
import SmallButton from '../../../components/raffleWriting/button/SmallButton';
import TextArea from '../../../components/raffleWriting/input/TextArea';
import SubHeader from '../../../components/raffleWriting/header/SubHeader';
import TextNumber from '../../../components/raffleWriting/input/TextNumber';
import ImageInput from '../../../components/raffleWriting/input/ImageInput';
import TextSmallLabel from '../../../components/raffleWriting/input/TextSmallLabel';
import SubmitButton from '../../../components/raffleWriting/button/SubmitButton';
import TextDate from '../../../components/raffleWriting/input/TextDate';
import FileInput from '../../../components/raffleWriting/input/FileInput';
import CancelButton from '../../../components/raffleWriting/button/CancelButton';
import { useState } from 'react';
import axios from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

function Writing() {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [detailValue, setDetailValue] = useState('');
  const [winnerCountValue, setWinnerCountValue] = useState(50);
  const [priceValue, setPriceValue] = useState(500);
  const [imageValue, setImageValue] = useState(null);
  const [fileValue, setFileValue] = useState(null);

  const submit = async () => {
    const contentsData = {
      "title": titleValue,
      "startDate": startValue,
      "endDate": endValue,
      "content": detailValue,
      "winnerCount": winnerCountValue,
      "rafflePrice": priceValue,
      "categoryId": selectValue,
    };
    const form = new FormData();
    form.append('postCreateRaffleProductRequest', new Blob([JSON.stringify(contentsData)], { type: "application/json" }))
    form.append('thumbnailImage', imageValue)
    form.append('attachedFile', fileValue)

    try {
      const response = await axios.post(`/creator/raffle-products`, form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response.data.result.startDate)
      navigate('/raffleWriting/Complete', {
        state: response.data.result.startDate,
      });
    } catch(e) {
      alert('등록 실패');
    }
    
  }

  return (
    <>
      <S.OneContentWrapper>
        <Header title={'래플 폼 작성'} />
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*카테고리"/>
          <SmallButton text="지난 래플 불러오기" />
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <Selectbox getValue={setSelectValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>
      
      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*제목"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
        <TextInput placeholder="*제목을 입력해주세요 (20자 이내)" getValue={setTitleValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*응모기간"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextLabel value="시작일 : "/>
          <TextDate getValue={setStartValue}/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextLabel value="종료일 : "/>
          <TextDate getValue={setEndValue}/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextSmallLabel value="사진 미첨부 시 자신의 프로필 사진으로 게시됩니다." />
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*설명"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextArea placeholder="내용을 입력해주세요 (500자 이내)" getValue={setDetailValue} />
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*당첨자 수"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextNumber default={50} getValue={setWinnerCountValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*1회 응모 가격"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextNumber default={500} getValue={setPriceValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="대표 사진 (선택)"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextSmallLabel value="사진 미첨부 시 자신의 프로필 사진으로 게시됩니다."/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <ImageInput getValue={setImageValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="첨부 파일 (선택)"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <FileInput getValue={setFileValue}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <CancelButton text="취소"/>
          <SubmitButton text="완료" onClickEvent={submit}/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>
    </>
  );
}

export default Writing;
        