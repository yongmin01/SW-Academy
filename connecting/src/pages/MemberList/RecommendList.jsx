import React from 'react'
import styled from 'styled-components'
import {
  CrownIcon,
  User1,
  User2,
  User3,
  User4,
  User5,
} from '../../assets/MemberList'
import { EmojiImg, NextIcon } from '../../assets/MemberList'
import {
  ProfileClickContainer,
  Circle1,
  Circle2,
  Circle3,
  ClickIconContainer,
  Tag1,
  Tag2,
  Tag3,
  ProfileInfoContainer,
  ClickTitle,
  NextClickBtn,
  DescriptionContainer,
  RecommendListContainer,
} from './RecommendList.style'
import { Link } from 'react-router-dom'

export default function RecommendList() {
  const [index, setIndex] = React.useState(0)

  const handleNextClick = () => {
    setIndex((index + 1) % data.length)
  }

  return (
    <RecommendListContainer>
      <DescriptionContainer>
        <div>네트워킹 장에 오신 걸 환영합니다!</div>
        <div>윤빈님에게 추천하는 참여자를 찾아봤어요</div>
      </DescriptionContainer>

      <ProfileClickContainer>
        <Link to="/detailprofile">
          <Circle1 />
          <Circle2 />
          <Circle3 />

          <ClickIconContainer />
          <ClickTitle>프로필 확인</ClickTitle>

          <Tag1>{data[index].tag[0]}</Tag1>
          <Tag2>{data[index].tag[1]}</Tag2>
          <Tag3>{data[index].tag[2]}</Tag3>

          <ProfileInfoContainer>
            {/* <EmojiImg /> */}
            {data[index].icon}
            <div>{data[index].name}</div>
          </ProfileInfoContainer>
        </Link>
        <CrownIcon style={style} />
      </ProfileClickContainer>

      <NextClickBtn style={{ cursor: 'pointer' }} onClick={handleNextClick}>
        <NextIcon />
      </NextClickBtn>
    </RecommendListContainer>
  )
}

const style = {
  // position: absolute;
  // border-radius: 50%;
  // width: 90%;
  // height: 90%;
  // background-color: #ffd3cd;
  // top: 5%;
  // left: 5%;

  position: 'absolute',
  // borderRadius: '50%',
  width: '20%',
  height: '20%',
  // backgroundColor: '#000',
  top: '-7%',
  left: '78%',
}

const data = [
  { name: '나윤빈', tag: ['#기획', '#BE', '#FE'], icon: <User1 /> },
  {
    name: '이조은',
    tag: ['#글미', '#ios', '#럭키비키'],
    icon: <User2 />,
  },
  { name: '조용민', tag: ['#FE', '#밴드부', '#복전'], icon: <User3 /> },
  { name: '김준석', tag: ['#소마', '#Infra', '#BE'], icon: <User4 /> },
  { name: '조은정', tag: ['#기획', '#BE', '#FE'], icon: <User5 /> },
]
