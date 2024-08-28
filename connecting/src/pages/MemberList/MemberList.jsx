import React from 'react'
import styled from 'styled-components'
import { MemberListContainer } from './MemberList.style'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import NavBar from '../../components/NavBar/NavBar'
import MemberListContent from './MemberListContent'

export default function MemberList() {
  return (
    <MemberListContainer>
      <HeaderBar />
      <MemberListContent />
      <NavBar />
    </MemberListContainer>
  )
}
