import React from 'react'
import styled from 'styled-components'
import { NavCircle, NavMypage, NavNetworking } from '../../assets/NavBar'
import { NavBarContainer, NavElemContainer } from './NavBar.style'

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavElem icon={<NavCircle />} text="팀매칭" />
      <NavElem active={true} icon={<NavNetworking />} text="네트워킹" />
      <NavElem icon={<NavMypage />} text="마이페이지" />
    </NavBarContainer>
  )
}

function NavElem({ icon, text, active }) {
  return (
    <NavElemContainer>
      {icon}
      <div style={{ color: active ? '#D4737C' : '#8e663c' }}>{text}</div>
    </NavElemContainer>
  )
}
