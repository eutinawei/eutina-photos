import React from 'react'
import styled from 'styled-components'
import Cursor from './components/Cursor'
import Header from './components/Header'
import eutina from './assets/eutina.jpg'
import text from './constants/aboutText'

const Wrapper = styled.div`
  margin: -8px;
  width: 100vw;
  height: 100vh;
  background: url(${eutina}) no-repeat;
  background-position: right top;
  background-size: cover;
`

const Text = styled.p`
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
    <Text>{text}</Text>
  </Wrapper>
)

export default About;
