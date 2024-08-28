import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <BackgroundContainer>
      <ImageButton onClick={handleButtonClick}>
        <ButtonImage src="path_to_your_image.png" alt="Profile" />
      </ImageButton>
    </BackgroundContainer>
  );
}

// 스타일 컴포넌트: 배경 이미지가 포함된 컨테이너
const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('path_to_your_background_image.jpg'); /* 배경 이미지 경로 설정 */
  background-size: cover; /* 배경 이미지가 컨테이너를 채우도록 설정 */
  background-position: center; /* 배경 이미지가 가운데 정렬되도록 설정 */
`;

// 스타일 컴포넌트: 버튼 스타일
const ImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;

  &:hover {
    opacity: 0.8; /* 호버 시 약간의 투명도 변화 */
  }
`;

// 스타일 컴포넌트: 이미지 스타일
const ButtonImage = styled.img`
  width: 100px; /* 필요에 따라 크기 조정 */
  height: 100px;
  border-radius: 50%; /* 이미지를 원형으로 만듦 */
  object-fit: cover;
`;

