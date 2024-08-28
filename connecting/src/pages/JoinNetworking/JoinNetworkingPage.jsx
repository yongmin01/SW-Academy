import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import plusIcon from "../../assets/plusIcon.svg";
import volumeIcon from "../../assets/memberVolumeIcon.svg";
import enterIcon from "../../assets/enterIcon.svg";
import makeNewGroupIcon from "../../assets/plusInCircleIcon.svg";
import { networkDummy } from "../../mocks/networkDummy";
import { useNavigate } from "react-router-dom";
import testLogo from "../../assets/testlogo.png";

import * as S from "./JoinNetworkingPage.style";
export default function JoinNetworkingPage() {
  const navigator = useNavigate();
  const showNetwork = () => {
    if (localStorage.getItem("network")) {
      return (
        <S.Network key="32323" onClick={() => navigator("/enterInviteCode")}>
          <S.Logo src={testLogo} width="30px" />
          <S.NetworkCenter>
            <S.NetworkTitle>2024 벤처 워크숍</S.NetworkTitle>
            <S.NetworkVolume>
              <S.VolumeIcon src={volumeIcon} width="8px" />
              <S.Volume>0</S.Volume>
            </S.NetworkVolume>
          </S.NetworkCenter>
          <S.EnterIcon src={enterIcon} width="20px" />
        </S.Network>
      );
    }
  };

  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.Greetings>
        <S.Title>반가워요 🙌</S.Title>
        <S.Comment>어서 네트워킹에 참여해 보세요!</S.Comment>
      </S.Greetings>
      <S.NetworkContainer>
        <S.MakeNetwork onClick={() => navigator("/createNetwork")}>
          <S.PlusIcon src={plusIcon} />
          <div>새로운 네트워크 형성하기</div>
        </S.MakeNetwork>
        <S.NetworkList>
          {networkDummy.map((network) => (
            <S.Network key={network.id}>
              <S.Logo src={network.logo} width="30px" />
              <S.NetworkCenter>
                <S.NetworkTitle>{network.title}</S.NetworkTitle>
                <S.NetworkVolume>
                  <S.VolumeIcon src={volumeIcon} width="8px" />
                  <S.Volume>{network.volume}</S.Volume>
                </S.NetworkVolume>
              </S.NetworkCenter>
              <S.EnterIcon src={enterIcon} width="20px" />
            </S.Network>
          ))}
          {localStorage.getItem("network") ? showNetwork() : null}
          <S.Network>
            <S.Logo src={makeNewGroupIcon} width="20px" />
            <S.NetworkTitle onClick={() => navigator("/enterInviteCode")}>
              초대코드 입력하기
            </S.NetworkTitle>
          </S.Network>
        </S.NetworkList>
      </S.NetworkContainer>
    </S.Container>
  );
}
