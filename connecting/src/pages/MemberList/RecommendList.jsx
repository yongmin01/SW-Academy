import React from 'react'
import styled from 'styled-components'
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

export default function RecommendList() {
  return (
    <RecommendListContainer>
      <DescriptionContainer>
        <div>네트워킹 장에 오신 걸 환영합니다!</div>
        <div>윤빈님에게 추천하는 참여자를 찾아봤어요</div>
      </DescriptionContainer>

      <ProfileClickContainer>
        <Circle1 />
        <Circle2 />
        <Circle3 />

        <ClickIconContainer />
        <ClickTitle>프로필 확인</ClickTitle>

        <Tag1># ISTJ</Tag1>
        <Tag2># ios 개발</Tag2>
        <Tag3># 디자이너</Tag3>

        <ProfileInfoContainer>
          <EmojiImg />
          <div>이조은</div>
        </ProfileInfoContainer>
      </ProfileClickContainer>

      <NextClickBtn>
        <NextIcon />
      </NextClickBtn>
    </RecommendListContainer>
  )
}
