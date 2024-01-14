import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as S from './style';
import TextSmallLabel from './TextSmallLabel';

function ImageInput(props) { 
  const [imageValue, setImageValue] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const photoInput = useRef();
  const buttonClickEvent = () => {
    photoInput.current.click();
  }

  const imageOnChange = (e) => {
    setImageValue(e.target.files[0]);
    props.getValue(e.target.files[0]);
    console.log(e.target.files[0])
    const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
}

  return (
    <>
    <S.ImageWrapperButton onClick={buttonClickEvent}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M17 15.1111V1.88889C17 0.85 16.15 0 15.1111 0H1.88889C0.85 0 0 0.85 0 1.88889V15.1111C0 16.15 0.85 17 1.88889 17H15.1111C16.15 17 17 16.15 17 15.1111ZM5.19444 9.91667L7.55556 12.7594L10.8611 8.5L15.1111 14.1667H1.88889L5.19444 9.91667Z" fill="#999999"/>
      </svg>
      <TextSmallLabel value="이미지 업로드" />
      <S.ImagePreview 
        src={imageSrc} 
      />
      <S.ImageInput 
        ref={photoInput}
        onChange={imageOnChange}
        type="file"
        id="ex_file"
        accept="image/jpg, image/png, image/jpeg" 
      />
    </S.ImageWrapperButton>
    </>
  );
}

export default ImageInput;
