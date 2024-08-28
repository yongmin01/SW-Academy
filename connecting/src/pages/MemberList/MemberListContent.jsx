import React from 'react'
import styled from 'styled-components'
import { MemberListContainer } from './MemberList.style'
import {
  ListActive,
  ListInactive,
  StarActive,
  StarInactive,
} from '../../assets/MemberList'
import RecommendList from './RecommendList'
import FullList from './FullList'

export default function MemberListContent() {
  const [listType, setListType] = React.useState('recommend')

  return (
    <MemberListContainer>
      <div style={{ flex: 1, width: '100%' }}>
        {listType == 'recommend' ? <RecommendList /> : <FullList />}
      </div>
      <ListTypeBtnContainer>
        <BtnElem
          icon={listType == 'recommend' ? <StarActive /> : <StarInactive />}
          text="추천 리스트"
          active={listType == 'recommend'}
          onClick={() => setListType('recommend')}
        />
        <BtnElem
          icon={listType != 'recommend' ? <ListActive /> : <ListInactive />}
          text="전체 리스트"
          active={listType != 'recommend'}
          onClick={() => setListType('all')}
        />
      </ListTypeBtnContainer>
    </MemberListContainer>
  )
}

function BtnElem({ icon, text, active, onClick }) {
  return (
    <BtnElemContainer
      style={{
        background: active ? '#f9a89d' : 'none',
        ...(text == '추천 리스트' ? recommendBtnStyle : allBtnStyle),
      }}
      onClick={onClick}
    >
      {icon}
      <div style={{ color: active ? '#fff' : '#4C4C4C' }}>{text}</div>
    </BtnElemContainer>
  )
}

const recommendBtnStyle = {
  borderBottomRightRadius: '0',
  borderTopRightRadius: '0',
}

const allBtnStyle = {
  borderBottomLeftRadius: '0',
  borderTopLeftRadius: '0',
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f7f1e9;
`

const ListTypeBtnContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
  place-content: center;
  cursor: pointer;
`

const BtnElemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7em 0;
  border: 2.5px solid #f9a89d;
  width: calc(50% - 2em);
  place-content: center;
  border-radius: 7px;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  div {
    font-size: 0.95em;
    font-weight: 500;
    color: #8e663c;
  }
`
