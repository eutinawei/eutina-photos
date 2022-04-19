import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

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

const Header = () => (
  <Wrapper>
    <Button title='eutina wei' />
      <Navigation>
        <Button title='about' />
        <Button title='contact' />
        <Icon img={github} link='https://github.com/eutinawei/pui-hw8' />
        <Icon img={linkedin} link='https://www.linkedin.com/in/eutinawei/' />
      </Navigation>
  </Wrapper>
)

export default Header;
