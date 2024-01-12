import React, { useState } from 'react';
import * as S from './style';
import pictureImage from '../../../src/assets/images/icon/picture.png';
import backImage from '../../../src/assets/images/back/return.png';
import { Link } from 'react-router-dom';
import axios from '../../../src/api/axios';

function UserSignUp() {
  const [formData, setFormData] = useState({
    nickname: '',
    address: '',
    phoneNumber: '',
    profileImageUrl: '',
    gender: '', // Add gender and birthday to the state
    birthday: '',
    additionalData: '',
    addressData1: '',
    addressData2: '',
    emergencyContactNumber: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic and update profileImageUrl in state
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/user/sign-up', formData);
      // Handle success, e.g., redirect to a new page
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 260, height: 472.08, position: 'relative' }}>

  {/*뒤로가기*/}
<Link to="/login">
<img src={backImage} alt="backImage" style={{ width: 23, height: 40, left: -10, top: -65, position: 'absolute'}} />
</Link>
      <div style={{width: 260, height: 472.08, position: 'relative'}}>
  <div style={{width: 260, height: 381, left: 0, top: 0, position: 'absolute'}}>  
   
  {/*카테고리*/}
  <div style={{ width: 71, height: 9, left: 100, top: -200, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word' }}>
  회원가입
  </div>
    <div style={{width: 57, height: 8, left: 0, top: -44, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>* 닉네임</div>
    <div style={{width: 57, height: 7, left: 0, top: -108, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>* 회원</div>
    <div style={{width: 57, height: 9, left: 0, top: 23, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>* 주소</div>
    <div style={{width: 57, height: 6, left: 0, top: 132, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>* 전화번호</div>
    <div style={{width: 71, height: 9, left: 0, top: 209, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>* 프로필 사진</div>
    <div style={{width: 260, height: 90, left: 0, top: 27, position: 'absolute'}}>
      
   {/*인풋값*/}
   <input
   type="text"
   placeholder="활동하시는 계정의 이름을 적어주세요."
   value={formData.additionalData}
   onChange={(e) => handleInputChange('additionalData', e.target.value)}
   style={{
     width: 259,
     height: 26,
     left: 0,
     top: 64,
    position: 'absolute',
    background: 'linear-gradient(213deg, #464646 0%, #464646 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    opacity: 0.90,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Karla',
    fontWeight: '700',
    lineHeight: 20,
  }}
 />

 <input
  type="text"
  placeholder="무형 래플 서비스를 위해 주소를 적어주세요."
  value={formData.addressData1}
  onChange={(e) => handleInputChange('addressData1', e.target.value)}
  style={{
    width: 259,
    height: 26,
    left: 0,
    top: 124,
    position: 'absolute',
    background: 'linear-gradient(213deg, #464646 0%, #464646 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    opacity: 0.90,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Karla',
    fontWeight: '700',
    lineHeight: 20,
  }}
/>

<input
type="text"
placeholder="상세 주소를 적어주세요."
value={formData.addressData2}
onChange={(e) => handleInputChange('addressData2', e.target.value)}
style={{
  width: 259,
  height: 26,
  left: 0,
  top: 164,
  position: 'absolute',
  background: 'linear-gradient(213deg, #464646 0%, #464646 100%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 5,
  opacity: 0.90,
  textAlign: 'center',
  color: 'white',
  fontSize: 12,
  fontFamily: 'Karla',
  fontWeight: '700',
  lineHeight: 20,
}}
/>

 <input
  type="text"
  placeholder="긴급 시 연락할 수 있는 번호를 입력해주세요."
  value={formData.emergencyContactNumber}
  onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
  style={{
    width: 259,
    height: 26,
    left: 0,
    top: 237,
    position: 'absolute',
    background: 'linear-gradient(213deg, #464646 0%, #464646 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    opacity: 0.90,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Karla',
    fontWeight: '700',
    lineHeight: 20,
  }}
/>

<input
  type="file"
  placeholder="이미지 업로드"
  onChange={(e) => handleImageUpload(e)}
  style={{
    width: 259,
    height: 22,
    left: 0,
    top: 315, // Adjust the top value accordingly
    position: 'absolute',
    color: 'white',
    zIndex: 1, // Place it above the styled text div
    background: 'linear-gradient(213deg, #464646 0%, #464646 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
  }}
/>

  {/*유저/크리에이터*/}
      <div style={{width: 120, height: 26, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(213deg, #7D3AF1 0%, #DC8AE1 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, backdropFilter: 'blur(4px)'}}>
      <div style={{width: 120, height: 26, left: 0, top: 0, position: 'absolute', borderRadius: 25}} />
      </div>
      <div style={{width: 120, height: 5, left: 0, top: -106, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>유저</div>
    
      <Link to="/creatorsignup">
      <div style={{width: 120, height: 26, left: 140, top: 0, position: 'absolute', background: 'linear-gradient(213deg, #464646 0%, #464646 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, backdropFilter: 'blur(4px)'}}>
      <div style={{width: 120, height: 26, left: 0, top: 0, position: 'absolute', borderRadius: 25}} />
      </div>
      </Link>
      </div>
      <div style={{width: 119, height: 8, left: 140, top: -79, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Karla', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>크리에이터</div>
  

  {/*회원가입 버튼*/}
  <button
  onClick={handleSignUp}
  style={{
    width: 256.70,
    height: 34.08,
    left: 1,
    top: 418,
    position: 'absolute',
    background: '#7D3AF1',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    backdropFilter: 'blur(4px)',
    border: 'none', // Remove default button border
    cursor: 'pointer', // Change cursor on hover
  }}
>
  <div style={{ width: 256.70, height: 34.08, left: 0, top: 0, position: 'absolute', borderRadius: 25 }} />
</button>
<div style={{ width: 154.02, height: 7.26, left: 49, top: 429, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Noto Sans KR', fontWeight: '700', wordWrap: 'break-word' }}>회원가입</div>


</div> 
</div> 

      </div>
    </div>
  );
}

export default UserSignUp;
