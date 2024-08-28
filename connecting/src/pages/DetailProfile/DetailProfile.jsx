import React from 'react'
import styled from 'styled-components'
import BackgroundUrl from '../../assets/DetailProfile/img_profile_background.svg'
import {
  GoodBtnIcon,
  HashtagIcon,
  LeftIcon,
  LinkIcon,
  PencilIcon,
  UserIcon,
} from '../../assets/DetailProfile'
import { MessageIcon } from '../../assets/HeaderBar'
import { Link } from 'react-router-dom'

export default function DetailProfile() {
  return (
    <DetailProfileContainer>
      <ProfileHeader>
        <Link to={'/memberlist'}>
          <LeftIcon />
        </Link>
        <div>조은정 님의 프로필</div>
      </ProfileHeader>

      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>

      <ProfileContentWrapper>
        <ContentElem
          title="개발 스택"
          content="FE (React), Design (Figma)"
          icon={<PencilIcon />}
        />
        <ContentElem
          title="깃허브 링크"
          content="https://github.com/EunJung516"
          icon={<LinkIcon />}
        />
        <ContentElem
          title="링크드인 링크"
          content="https://github.com/EunJung516"
          icon={<LinkIcon />}
        />
        <ContentElem
          title="관심사"
          content="#밴드 #알고리즘 #취준"
          tag
          icon={<HashtagIcon />}
        />
      </ProfileContentWrapper>

      <BtnWrapper>
        <BtnElemWrapper>
          <MessageIcon />
          <div>쪽지하기</div>
        </BtnElemWrapper>
        <BtnElemWrapper>
          <GoodBtnIcon />
          <div>좋아요</div>
        </BtnElemWrapper>
      </BtnWrapper>
    </DetailProfileContainer>
  )
}

function ContentElem({ title, content, icon, tag }) {
  return (
    <ContentElemContainer>
      <ContentTitle>
        <div>{title}</div>
        {icon}
      </ContentTitle>
      <div>{content}</div>
    </ContentElemContainer>
  )
}

const BtnElemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 48%;
  background: #fff;
  border: 2px solid #f16169;
  border-radius: 50px;
  align-items: center;
  color: #f16169;
  font-weight: 600;
  font-size: 1.1em;
  padding: 0.4em 0.5em;

  div {
    margin-left: 0.5em;
    padding-top: 3px;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.2em;
  background: #fff;
  padding-bottom: 2em;
`

const DetailProfileContainer = styled.div`
  width: 100%;
  height: calc(100vh - 3px);
  background-image: url(${BackgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
`

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between; /* 양쪽 끝으로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  margin: 1em 1.5em; /* 좌우 여백 */

  svg {
    width: 2em;
    height: 2em;
  }

  div {
    width: fit-content; /* 원하는 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
    padding-top: 3px;
    padding-right: 1em;
  }
`

const UserIconWrapper = styled.div`
  text-align: center;
  background: #fff;
  width: 34%;
  aspect-ratio: 1;
  border-radius: 50%;
  align-content: center;
  align-self: center;
  margin-top: 0.5em;
  margin-bottom: 2em;

  svg {
    width: 70%;
    height: 70%;
    margin-top: 3px;
  }
`

const ProfileContentWrapper = styled.div`
  flex: 1;
  background: #fff;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  padding: 1.5em 1.2em;

  overflow: auto;
`

const ContentElemContainer = styled.div`
  border: 0.8px solid #c7c7c7;
  border-radius: 10px;
  color: #454545;
  padding: 0.8em 0.8em;
  margin-bottom: 1em;
  font-size: 0.8em;
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-weight: 600;
    margin-bottom: 0.7em;
    padding-top: 0.3em;
  }

  svg {
    width: 1.2em;
    height: 1.2em;
  }
`
