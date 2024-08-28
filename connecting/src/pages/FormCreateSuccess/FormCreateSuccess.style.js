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
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  position: relative;
`;
export const Comment = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #f26c71;
`;
export const CommentContainer = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #f26c71;
  text-align: center; /* 텍스트 수평 중앙 정렬 */
`;
export const SubComment = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #454545;
  /* text-align: center;  */
`;
