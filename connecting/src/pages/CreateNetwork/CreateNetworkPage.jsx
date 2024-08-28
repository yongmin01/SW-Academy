import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import * as S from "./CreateNetworkPage.style";
import { useNavigate } from "react-router-dom";

export default function CreateNetworkPage() {
  const inputRef = useRef();
  const navigator = useNavigate();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(logo); // 초기 상태로 로고 이미지를 사용
  const [imageFileName, setImageFileName] = useState(
    "네트워킹 대표 이미지를 첨부해주세요"
  );

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
        <S.Icon src={logo} width="35px" />
        <S.HeaderCenter>
          <S.HeaderTitle>네트워킹 생성</S.HeaderTitle>
        </S.HeaderCenter>
        <S.Icon src={closeIcon} width="25px" onClick={() => navigator(-1)} />
      </S.Header>
      <S.Form>
        <S.SubHeaderTitle>네트워킹 정보를 입력하세요</S.SubHeaderTitle>
        <S.InputContainer>
          <S.Label>네트워킹 이름</S.Label>
          <S.Input placeholder="네트워킹 이름을 입력해주세요" />
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
          <S.Label>네트워킹 관련 링크 (선택)</S.Label>
          <S.Input placeholder="관련 링크를 입력해주세요" />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>네트워킹 간단 소개</S.Label>
          <S.Textarea placeholder="네트워킹 간단 소개를 입력해주세요" />
        </S.InputContainer>
      </S.Form>
      <S.SubmitBtn onClick={() => navigator("/createFormat")}>
        네트워킹 생성하기
      </S.SubmitBtn>
    </S.Container>
  );
}
