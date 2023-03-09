import React, { useState, useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'
import { Squash as Burger} from 'hamburger-react'
import youtube from '../assets/youtube.png'
import { forDesktop, forMobile } from '../constants/breakpoints'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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

const DesktopList = styled.div`
  ${forMobile} {
    display: none;
  }
  display: flex;
  align-items: center;
`

const MobileList = styled.div`
  ${forDesktop} {
    display: none;
  }
`

const HiddenList = styled.div`
  animation: ${fadeIn} 1s;
  position: fixed;
  height: 100px;
  right: 50px;
  top: 110px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: end;
`

const Header = ({city}) => {
  const [burgerIsOpen, setBurgerOpen] = useState(false);
  const [burgerColor, setBurgerColor] = useState('white');
  const headerRef = useRef();

  useEffect(() => {
    if (city !== "" && city !== "about") {
      headerRef.current.style.background = "#ffffff";
    }
    if (city !== "") {
      setBurgerColor("black");
    }
  }, [city])

  return(
    <Outer>
      <Wrapper ref={headerRef}>
        <Button title='eutina wei' city={city} />
        <DesktopList>
          <Button title="thoughts" city={city} />
          <Button title='about' city={city} />
          <Icon img={youtube} link='https://www.youtube.com/@eutinawei' city={city} />
        </DesktopList>
        <MobileList>
          <Burger color={burgerColor} size={22} toggled={burgerIsOpen} toggle={setBurgerOpen} />
          {burgerIsOpen ? <HiddenList>
                      <Button title="thoughts" city={city} />
                      <Button title='about' city={city} />
                      <Icon img={youtube} link='https://www.youtube.com/@eutinawei' city={city} />
                    </HiddenList> : ''}
        </MobileList>
      </Wrapper>
    </Outer>
  )
}

export default Header;
