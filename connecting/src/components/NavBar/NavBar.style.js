import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  justify-content: space-around;
  align-items: center;
  background: #f7f1e9;
  border-top: 1px solid #efe4d7;
`

export const NavElemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8em 0 0.7em 0;

  svg {
    width: 1.5em;
    height: 1.5em;
  }

  div {
    margin-top: 0.5em;
    font-size: 0.7em;
    font-weight: 500;
    color: #8e663c;
  }
`
