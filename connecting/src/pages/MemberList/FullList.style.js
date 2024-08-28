import styled from 'styled-components'

export const UserIconWrapper = styled.div`
  background: #f3f3f3;
  width: 2.3em;
  height: 2.3em;
  border-radius: 50%;
  align-content: center;
  margin-bottom: 4px;

  svg {
    width: 1.8em;
    height: 1.8em;
  }
`

export const TagElem = styled.div`
  background: #fde9e7;
  font-size: 0.4em;
  width: fit-content;
  color: #454545;
  border-radius: 3px;
  padding: 3px 3px;
  height: 14px;
  margin-right: 3px;
  text-align: start;
  max-width: 13em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  margin-bottom: 3px;
`

export const FullListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const FullListDescription = styled.div`
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 2em;
  color: #4c4c4c;
  text-align: center;
  margin-bottom: 0.3em;
`

export const FullListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 2em);
  margin: 0 auto;
  overflow: auto;
`

export const FullListElemContainer = styled.div`
  width: 45%;
  aspect-ratio: 1;
  background-color: #fff;
  margin: 2.5%;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
`

export const UserIconName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`

export const UserName = styled.div`
  color: #454545;
  font-size: 0.6em;
  font-weight: 500;
`

export const UserTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`
