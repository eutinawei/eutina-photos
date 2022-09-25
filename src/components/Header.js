import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'
import youtube from '../assets/youtube.png'

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({city}) => {
  const headerRef = useRef();

  useEffect(() => {
    if (city !== "" && city !== "about") {
      headerRef.current.style.background = "#ffffff";
    }
  })

  return(
    <Outer>
      <Wrapper ref={headerRef}>
        <Button title='eutina wei' city={city} />
        <Navigation>
          <Button title="thoughts" city={city} />
          <Button title='about' city={city} />
          <Icon img={youtube} link='https://www.youtube.com/channel/UCVyNVbdtiNWfPriaf1Jqpcg' city={city} />
        </Navigation>
      </Wrapper>
    </Outer>
  )
}

export default Header;
