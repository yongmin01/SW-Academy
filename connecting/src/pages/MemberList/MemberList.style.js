import styled from 'styled-components'
import BackgroundUrl from '../../assets/MemberList/img_main_background.svg'

export const MemberListContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${BackgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`
