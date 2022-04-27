import React from 'react'
import styled from 'styled-components'
import Cursor from './components/Cursor'
import Header from './components/Header'
import eutina from './assets/eutina.jpg'
import text from './constants/aboutText'

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
  z-index: -1;
`

const Text = styled.div`
  position: absolute;
  top: 130px;
  right: 70px;
  width: calc(100vw / 2);
  text-align: right;
  line-height: 25px;
  white-space: pre-wrap;
`

const About = () => (
  <Wrapper>
    <Cursor />
    <Header city="about" />
    <Background />
    <Text>{text}</Text>
  </Wrapper>
)

export default About;
