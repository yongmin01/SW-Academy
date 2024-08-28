import styled from "styled-components";
import background from "../../assets/background.svg";
import logo from "../../assets/logo.svg";

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
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

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
export const SubHeaderTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  color: #454545;
`;
export const Icon = styled.img`
  width: ${(props) => props.width};
  height: 35px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
  overflow-y: scroll;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 15px;

  background: #ffffff;
  border: 0.8px solid #c7c7c7;
  border-radius: 10px;
  &:first-child {
    margin-top: 19px;
  }
`;
export const ImageInputBtn = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffdad5;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 10px;
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
  flex: 1;
`;
export const ImageInputContainer = styled.div`
  display: flex;
  gap: 9px;
`;
export const ImageInput = styled.input`
  visibility: hidden;
  position: absolute;
`;
export const SubmitBtn = styled.button`
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
