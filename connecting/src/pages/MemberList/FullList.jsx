import React from 'react'
import {
  GoodActive,
  GoodInactive,
  User1,
  User2,
  User3,
  User4,
  User5,
} from '../../assets/MemberList'
import {
  FullListContainer,
  FullListDescription,
  FullListWrapper,
  FullListElemContainer,
  UserIconWrapper,
  TagElem,
  UserIconName,
  UserName,
  UserTagWrapper,
} from './FullList.style'
import { Link } from 'react-router-dom'

export default function FullList() {
  return (
    <FullListContainer>
      <FullListDescription>
        마음껏 윤빈님의 관심을 나눠보세요!
      </FullListDescription>
      <FullListWrapper>
        <FullListElem
          icon={<User1 />}
          name={'나윤빈'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#기획 #BE #FE #Data Science"
        />
        <FullListElem
          icon={<User2 />}
          name={'이조은'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#글미 #ios 개발 #럭키비키마인드 장착"
        />
        <FullListElem
          icon={<User3 />}
          name={'조용민'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#FE #밴드부 #복전 #테니스"
        />
        <FullListElem
          icon={<User4 />}
          name={'김준석'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#소마 #Infra #BE"
        />
        <FullListElem
          icon={<User5 />}
          name={'조은정'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#기획 #BE #FE #Data Science"
        />
        <FullListElem
          icon={<User1 />}
          name={'김준식'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#FE #밴드부 #복전 #테니스"
        />
        <FullListElem
          icon={<User1 />}
          name={'나윤빈'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#기획 #BE #FE #Data Science"
        />
        <FullListElem
          icon={<User2 />}
          name={'이조은'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#글미 #ios 개발 #럭키비키마인드 장착"
        />
        <FullListElem
          icon={<User3 />}
          name={'조용민'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#FE #밴드부 #복전 #테니스"
        />
        <FullListElem
          icon={<User4 />}
          name={'김준석'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#소마 #Infra #BE"
        />
        <FullListElem
          icon={<User5 />}
          name={'조은정'}
          buttonIcon={<GoodActive />}
          active={true}
          tag="#기획 #BE #FE #Data Science"
        />
        <FullListElem
          icon={<User1 />}
          name={'김준식'}
          buttonIcon={<GoodInactive />}
          active={false}
          tag="#FE #밴드부 #복전 #테니스"
        />
      </FullListWrapper>
    </FullListContainer>
  )
}

function FullListElem({ icon, name, buttonIcon, tag, active }) {
  const tags = tag.split('#').filter((tag) => tag !== '')
  const [activeBtn, setActiveBtn] = React.useState(active ? active : false)

  const handleActiveBtn = (event) => {
    event.stopPropagation() // 부모 링크의 클릭 이벤트 전파 방지
    setActiveBtn(!activeBtn)
  }

  return (
    <FullListElemContainer>
      <UserIconName>
        <div>
          <UserIconWrapper>{icon}</UserIconWrapper>
          <UserName>{name}</UserName>
        </div>
        {activeBtn ? (
          <GoodActive onClick={handleActiveBtn} />
        ) : (
          <GoodInactive onClick={handleActiveBtn} />
        )}
        {/* {buttonIcon} */}
      </UserIconName>
      <Link to="/detailprofile">
        <UserTagWrapper>
          {tags.map((tag, index) => (
            <TagElem key={index}>{`#${tag}`}</TagElem>
          ))}
        </UserTagWrapper>
      </Link>
    </FullListElemContainer>
  )
}
