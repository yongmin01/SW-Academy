import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 30px 0;
`;

export const Logo = styled.img`
  width: ${(props) => props.width};
  height: 35px;
  margin-right: 10px;
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 58px;
`;
export const Title = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #3f3f3f;
`;

export const Comment = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #454545;
`;

export const NetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 30px;
`;

export const MakeNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;

  color: #4c4c4c;

  box-sizing: border-box;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 0 10px;
`;
export const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const NetworkList = styled.div`
  font-size: 20px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  padding: 0 12px;
  gap: 12px;
`;
export const Network = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    margin-top: 15px;
  }
  &:last-child {
    margin-bottom: 9px;
  }
`;

export const NetworkCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
export const NetworkTitle = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  flex: 1;
  /* line-height: 24px; */

  color: #4c4c4c;
`;
export const NetworkVolume = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  color: #4c4c4c;
`;
export const VolumeIcon = styled.img`
  width: 8px;
  height: 8px;
`;
export const Volume = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 7px;

  color: #4c4c4c;
`;
export const EnterIcon = styled.img`
  width: 20px;
  height: 20px;
`;
