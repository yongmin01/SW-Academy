import styled from 'styled-components'

export const HeaderBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2em;
  padding-bottom: 0;
  align-items: center;
`

export const NetworkListBtn = styled.div`
  display: flex;
  background-color: pink;
  align-items: center;
  border: 2.5px solid #f9a89d;
  border-radius: 10px;
  background: #fff;
  padding: 0.3em 0;

  svg {
    width: 1.5em;
    height: 1.5em;
    margin: 0 0.7em;
  }

  div {
    margin-top: 0.2em;
    font-size: 0.9em;
    font-weight: 500;
  }
`
