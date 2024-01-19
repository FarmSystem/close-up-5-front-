import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import * as S from './style';
import TextSmallLabel from './TextSmallLabel';

function FileInput(props) {
  const [imageValue, setImageValue] = useState('');
  const [fileSrc, setFileSrc] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const photoInput = useRef();
  const buttonClickEvent = () => {
    photoInput.current.click();
  };

  const imageOnChange = e => {
    const file = e.target.files[0];

    if (file) {
      setImageValue(file);
      props.getValue(file);

      setFileSrc(file.name);

      if (file.type.startsWith('image/')) {
        // If the file is an image, read and display the preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        // If the file is not an image, clear the preview
        setImagePreview(null);
      }
    }
  };

  return (
    <>
      <S.ImageWrapperButton onClick={buttonClickEvent}>
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" width="50" height="50" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
          >
            <path
              d="M11.0526 0H1.57895C0.710526 0 0 0.695454 0 1.54545V12.3636H1.57895V1.54545H11.0526V0ZM10.2632 3.09091L15 7.72727V15.4545C15 16.3045 14.2895 17 13.4211 17H4.72895C3.86053 17 3.15789 16.3045 3.15789 15.4545L3.16579 4.63636C3.16579 3.78636 3.86842 3.09091 4.73684 3.09091H10.2632ZM9.47368 8.5H13.8158L9.47368 4.25V8.5Z"
              fill="#999999"
            />
          </svg>
        )}
        <TextSmallLabel value="파일 업로드" />
        <TextSmallLabel value={fileSrc} />
        <S.ImageInput
          ref={photoInput}
          onChange={imageOnChange}
          type="file"
          id="ex_file"
        />
      </S.ImageWrapperButton>
    </>
  );
}
export default FileInput;
