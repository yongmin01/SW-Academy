import React from 'react'
import { LogoIcon, MessageIcon, UnderArrow } from '../../assets/HeaderBar'
import { HeaderBarContainer, NetworkListBtn } from './HeaderBar.style'
import styled from 'styled-components'
import { Logo1, Logo2 } from '../../assets/MemberList'

export default function HeaderBar() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <HeaderBarContainer>
        <LogoIcon />
        <NetworkListBtn onClick={() => setOpen(!open)}>
          <LogoIcon />
          <div>2024 벤처 워크숍</div>
          <UnderArrow />
        </NetworkListBtn>
        <MessageIcon />
      </HeaderBarContainer>
      <TestWrapper style={{ display: open ? 'block' : 'none' }}>
        <TempWrapper>
          <Logo1 />
          <div>코리아 스타트업 포럼</div>
        </TempWrapper>
        <TempWrapper>
          <Logo2 />
          <div>2024 벤처 워크숍</div>
        </TempWrapper>
      </TestWrapper>
    </>
  )
}

const TempWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin: 4px;
  cursor: pointer;
  font-size: 0.8em;
  margin-bottom: 0.5em;

  div {
    margin-left: 10px;
    color: #454545;
  }

  svg {
    width: 2em;
    height: 2em;
  }
`

const TestWrapper = styled.div`
  position: fixed;
  top: 5em;
  left: calc(50% - 5.8em);
  padding: 10px;
  // background-color: lightcoral;
  background-color: white;
  zindex: 1000;
  width: 12em;
  border-radius: 10px;
  height: 5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
