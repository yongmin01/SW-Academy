import React from 'react'
import { LogoIcon, MessageIcon, UnderArrow } from '../../assets/HeaderBar'
import { HeaderBarContainer, NetworkListBtn } from './HeaderBar.style'

export default function HeaderBar() {
  return (
    <HeaderBarContainer>
      <LogoIcon />
      <NetworkListBtn>
        <LogoIcon />
        <div>2024 벤처 워크숍</div>
        <UnderArrow />
      </NetworkListBtn>
      <MessageIcon />
    </HeaderBarContainer>
  )
}
