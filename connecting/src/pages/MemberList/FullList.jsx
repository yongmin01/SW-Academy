import React from 'react'
import styled from 'styled-components'

export default function FullList() {
  return (
    <FullListContainer>
      <FullListElem>FullList</FullListElem>
      <FullListElem>FullList</FullListElem>
      <FullListElem>FullList</FullListElem>
      <FullListElem>FullList</FullListElem>
      <FullListElem>FullList</FullListElem>
      <FullListElem>FullList</FullListElem>
    </FullListContainer>
  )
}

const FullListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 4em);
  margin: 0 auto;
  aspect-ratio: 1;
`

const FullListElem = styled.div`
  width: 45%; /* 각 항목의 너비 */

  background-color: #f0f0f0; /* 배경색 */
  margin: 2.5%; /* 간격 */
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Test = styled.div`
  width: 100%;
  background-color: pink;
`
