import React from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { useNavigate } from "react-router-dom";

import * as S from "./EnterInviteCodePage.style";

export default function EnterInviteCodePage() {
  const navigator = useNavigate();
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} width="35px" />
        <S.HeaderTitle>초대코드 입력하기</S.HeaderTitle>
        <S.Logo src={closeIcon} width="25px" onClick={() => navigator(-1)} />
      </S.Header>
      <S.InputContainer>
        <S.Label>초대코드</S.Label>
        <S.Input placeholder="초대코드를 입력해주세요" />
      </S.InputContainer>
      <S.Btn onClick={() => navigator("/enterMyInfo")}>다음</S.Btn>
    </S.Container>
  );
}
