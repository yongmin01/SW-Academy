import React, { useEffect } from "react";
import * as S from "./FormCreateSuccess.style";
import { useNavigate } from "react-router-dom";
export default function FormCreateSuccess() {
  const navigator = useNavigate();
  useEffect(() => {
    localStorage.setItem("network", true);
    setTimeout(() => navigator("/joinNetworking"), 2000);
  }, []);
  return (
    <S.Container>
      <S.CommentContainer>
        <S.Comment>네트워크 생성에 성공했습니다!</S.Comment>
        <S.SubComment>네트워킹 참여자들을 모아보세요</S.SubComment>
      </S.CommentContainer>
    </S.Container>
  );
}
