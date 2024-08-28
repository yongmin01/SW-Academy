import React from "react";
import backIcon from "../../assets/backIcon.svg";
import plusIcon from "../../assets/pinkPlusIcon.svg";
import checkIcon from "../../assets/checkIcon.svg";
import * as S from "./CreateFormatPage.style";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function CreateFormatPage() {
  const inputRef = useRef();
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
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
    <S.Page>
      <S.Header>
        <S.Icon src={backIcon} width="25px" onClick={() => navigator(-1)} />
        <S.HeaderCenter>
          <S.HeaderTitle>2024 벤처 워크숍</S.HeaderTitle>
          <S.SubHeaderTitle>
            참여할 때 필요한 정보를 입력해주세요
          </S.SubHeaderTitle>
        </S.HeaderCenter>
      </S.Header>
      <S.Container>
        <S.Form>
          <S.FormTitle>참여자 정보 입력 예시</S.FormTitle>
          <S.InputContainer>
            <S.Label>이름</S.Label>
            <S.Input
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <S.Label>관심 분야</S.Label>
            <S.Input
              placeholder="관심분야를 적어주세요"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </S.InputContainer>
        </S.Form>
        <S.BtnContainer>
          <S.LabelAddBtn className="borderBtn">
            <S.Icon src={plusIcon} width="20px" />
            정보 추가
          </S.LabelAddBtn>
          <S.LabelAddBtn
            className="noneBorderBtn"
            onClick={() => navigator("/createFormSuccess")}
          >
            <S.Icon src={checkIcon} width="22px" />
            완료하기
          </S.LabelAddBtn>
        </S.BtnContainer>
      </S.Container>
    </S.Page>
  );
}
