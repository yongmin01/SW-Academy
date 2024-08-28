import styled from 'styled-components'
import ClickUrl from '../../assets/MemberList/ic_click.svg'

export const RecommendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const DescriptionContainer = styled.div`
  color: #4c4c4c;
  text-align: center;

  div:first-child {
    font-size: 1em;
    font-weight: 600;
    margin-top: 2em;
  }

  div:last-child {
    font-size: 1em;
    font-weight: 400;
    margin-top: 1em;
  }
`

export const ProfileClickContainer = styled.div`
  position: relative;
  width: 70%;
  aspect-ratio: 1;
  margin: 0px auto;
  margin-top: 2em;
`

export const Circle1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffe3e0;
  position: absolute;
  border-radius: 50%;
`

export const Circle2 = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 90%;
  height: 90%;
  background-color: #ffd3cd;
  top: 5%;
  left: 5%;
`

export const Circle3 = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 80%;
  height: 80%;
  background: linear-gradient(to top right, #f16169, #f9a89d);
  top: 10%;
  left: 10%;
  box-shadow: -5px 12px 13px #d4737c;
`

export const ClickIconContainer = styled.div`
  position: absolute;
  width: 28%;
  height: 28%;
  top: 32%;
  left: 36%;

  background-image: url(${ClickUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const TagContainer = styled.div`
  position: absolute; /* 절대 위치 지정 */
  padding: 8px 12px 4px 12px; /* 태그 패딩 */
  border-radius: 12px; /* 원형으로 만들기 */
  width: fit-content; /* 세 번째 원의 너비 */
  height: fit-content; /* 세 번째 원의 높이 */
  background: #fff;
  color: #4c4c4c;
  font-weight: 600;
  border: 1px solid #d4b594;
`

export const Tag1 = styled(TagContainer)`
  top: 29%; /* 위치 조정 */
  left: -3%; /* 위치 조정 */
`

export const Tag2 = styled(TagContainer)`
  top: 45%; /* 위치 조정 */
  left: -8%; /* 위치 조정 */
`

export const Tag3 = styled(TagContainer)`
  top: 61%; /* 위치 조정 */
  left: -3%; /* 위치 조정 */
`

export const ProfileInfoContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 33%;
  height: 33%;
  background: linear-gradient(to bottom right, #ffeeec, #ffe3e0);
  top: 4%;
  left: 64%;
  box-shadow: 0 3px 2px 2px rgba(243, 111, 115, 0.25);
  place-content: center;
  text-align: center;

  svg {
    width: 50%;
    height: 50%;
  }

  div {
    color: #454545;
    font-size: 0.9em;
    font-weight: 600;
    margin-top: 0.25em;
  }
`

export const ClickTitle = styled.div`
  position: absolute;
  bottom: 28%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
`

export const NextClickBtn = styled.div`
  background: linear-gradient(to top right, #f36c71, #efb6ac);
  width: 4em;
  height: 4em;
  border-radius: 50%;

  margin-top: -2em;

  text-align: center;
  align-content: center;
  margin-left: auto;
  margin-right: 2em;
  margin-bottom: 4em;

  box-shadow: 0px 0px 2px 2px rgba(212, 115, 124, 0.25);
`
