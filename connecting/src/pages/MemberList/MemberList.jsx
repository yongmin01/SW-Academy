import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { MemberListContainer } from './MemberList.style'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import NavBar from '../../components/NavBar/NavBar'
import MemberListContent from './MemberListContent'

export default function MemberList() {
  const [recommendList, setRecommendList] = React.useState([])

  console.log('membserlist')

  useEffect(() => {
    const fetchData = async () => {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdW5zdWs4OTYwQG5hdmVyLmNvbSIsInByb2ZpbGVJZCI6MSwiaWF0IjoxNzI0ODI0Mjg1LCJleHAiOjE3MjQ4Njc0ODV9.ZCrw74PQi2GCRcYDgb4XWvSG3i-_UOuaNZ9F64CG_Bw'
      try {
        const response = await axios.get(
          'http://54.180.236.193:8080/profiles/recommend',
          {
            headers: {
              Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
            },
          }
        )
        // setRecommendList(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <MemberListContainer>
      <HeaderBar />
      <MemberListContent />
      <NavBar />
    </MemberListContainer>
  )
}
