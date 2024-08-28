import React from "react";

import logo from "../../assets/logo.svg";
import plusIcon from "../../assets/plusIcon.svg";
import volumeIcon from "../../assets/memberVolumeIcon.svg";
import enterIcon from "../../assets/enterIcon.svg";
import makeNewGroupIcon from "../../assets/plusInCircleIcon.svg";
import { networkDummy } from "../../mocks/networkDummy";
import { useNavigate } from "react-router-dom";

import * as S from "./JoinNetworkingPage.style";
export default function JoinNetworkingPage() {
  const navigator = useNavigate();

  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.Greetings>
        <S.Title>반가워요 조용민님 🙌</S.Title>
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
