import styled from "styled-components";
import background from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 27px 30px 30px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: #454545;
`;
export const Logo = styled.img`
  width: ${(props) => props.width};
  height: 35px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 15px;

  background: #ffffff;
  border: 0.8px solid #c7c7c7;
  border-radius: 10px;
  margin-top: 48px;
`;
export const Label = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;

  color: #454545;
`;
export const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Btn = styled.button`
  width: 100%;
  background-color: #f47074;
  padding: 9px 0;
  border: none;
  border-radius: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: #ffffff;

  position: relative;
  margin-top: auto;
`;
