import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Page = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(to right, #f9a89d, #f16169);

  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 30px 30px;
`;
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;

  align-items: center;
`;
export const HeaderTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: #ffffff;
`;
export const SubHeaderTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  color: #ffffff;
`;
export const Icon = styled.img`
  width: ${(props) => props.width};
  height: 35px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
export const FormTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  /* padding: 0 26px; */
  color: #454545;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 16px;

  padding: 0 26px;
  overflow-y: scroll;
`;
export const InputContainer = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 8px 15px;

  background: #ffffff;
  border: 0.8px solid #c7c7c7;
  border-radius: 10px;
  &:first-child {
    margin-top: 19px;
  }
  flex: 1;
`;
export const ImagePreview = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffdad5;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;
export const ImageInputBtn = styled.div`
  width: 100%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  color: #454545;
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
export const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
  padding-bottom: 30px;
`;
export const LabelAddBtn = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  width: 20vw;

  box-sizing: border-box;

  &.borderBtn {
    border: 2px solid #f16169;
    border-radius: 25px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f16169;
  }
  &.noneBorderBtn {
    background: #f16169;
    border: 2px solid #f16169;
    border-radius: 25px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #ffffff;
  }
`;
