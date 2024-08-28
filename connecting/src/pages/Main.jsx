import React from "react";
import styled from "styled-components";

export default function Main() {
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

const Test = styled.div`
  width: 100%;
  background-color: pink;
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('path_to_your_background_image.jpg'); /* 배경 이미지 경로 설정 */
  background-size: cover; /* 배경 이미지가 컨테이너를 채우도록 설정 */
  background-position: center; /* 배경 이미지가 가운데 정렬되도록 설정 */
`;

const ImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  
  &:hover {
    opacity: 0.8; /* Adds a slight hover effect */
  }
`;

// Styled Components for the image
const ButtonImage = styled.img`
  width: 100px; /* Adjust the size as needed */
  height: 100px;
  border-radius: 50%; /* Make it a circle */
  object-fit: cover;
`;
