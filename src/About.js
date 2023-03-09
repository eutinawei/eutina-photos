import React from 'react'
import styled from 'styled-components'
import Cursor from './components/Cursor'
import Header from './components/Header'
import eutina from './assets/eutina.jpg'
import text from './constants/aboutText'
import { forDesktop, forMobile } from './constants/breakpoints'

const Wrapper = styled.div`
  margin: -8px;
`

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url(${eutina}) no-repeat;
  background-position: right top;
  background-size: cover;
  z-index: -5;
`

const TextWrapper = styled.div`
  position: absolute;
  top: 130px;
  right: 70px;
  height: calc(100vh - 150px);
  overflow: scroll;
  z-index: -1;
  ${forDesktop} {
    width: calc(100vw / 2);
  }
  ${forMobile} {
    width: calc(100vw / 3 * 2);
  }
`

const Text = styled.div`
  text-align: right;
  line-height: 25px;
  white-space: pre-wrap;
`

const About = () => (
  <Wrapper>
    <Cursor />
    <Header city="about" />
    <Background />
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  </Wrapper>
)

export default About;
