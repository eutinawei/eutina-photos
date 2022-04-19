import React from 'react'
import styled from 'styled-components'
import Cursor from './components/Cursor'
import Header from './components/Header'
import sea from './assets/sea.png'

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: -8px;
  font-family: "Courier";
  background: url(${sea}) no-repeat center/cover;
`

const Home = () => (
  <Wrapper>
    <Cursor />
    <Header />
  </Wrapper>
)

export default Home;
