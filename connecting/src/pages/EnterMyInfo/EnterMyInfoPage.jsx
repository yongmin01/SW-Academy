import React from "react";
import backIcon from "../../assets/backIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import logo from "../../assets/logo.svg";

import * as S from "./EnterMyInfoPage.style";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnterMyInfoPage() {
  const inputRef = useRef();
  const navigator = useNavigate();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(logo); // 초기 상태로 로고 이미지를 사용
  const [imageFileName, setImageFileName] =
    useState("대표 이미지를 첨부해주세요");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Icon src={backIcon} width="25px" onClick={() => navigator(-1)} />
        <S.HeaderCenter>
          <S.HeaderTitle>2024벤처 워크숍</S.HeaderTitle>
          <S.SubHeaderTitle>네트워킹 정보를 입력해주세요</S.SubHeaderTitle>
        </S.HeaderCenter>
        <S.Icon src={closeIcon} width="25px" />
      </S.Header>
      <S.Form>
        <S.InputContainer>
          <S.Label>이름</S.Label>
          <S.Input placeholder="여기서 사용할 이름을 입력해주세요" />
        </S.InputContainer>
        <S.ImageInputContainer>
          <S.ImagePreview
            onClick={() => inputRef.current.click()}
            style={{ backgroundImage: `url(${imagePreviewUrl})` }}
          />
          <S.ImageInput
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
          />
          <S.InputContainer onClick={() => inputRef.current.click()}>
            <S.Label>대표이미지 (선택)</S.Label>
            <S.ImageInputBtn>{imageFileName}</S.ImageInputBtn>
          </S.InputContainer>
        </S.ImageInputContainer>
        <S.InputContainer>
          <S.Label>관심사</S.Label>
          <S.Input placeholder="관심사를 입력해주세요 (ex) #애니 #농구" />
        </S.InputContainer>
      </S.Form>
      <S.SubmitBtn>네트워킹 참가하기</S.SubmitBtn>
    </S.Container>
  );
}
