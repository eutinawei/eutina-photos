import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import sea from './assets/sea.png'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Menu from './components/Menu'
import Detail from './Detail'
import cities from './constants/cities'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: -8px;
`

const Content = styled.div`
  animation: ${fadeIn} 1.5s;
`

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1000;
  background: url(${sea}) no-repeat center/cover;
`

const Home = () => {
  const [city, setCity] = useState({});
  return (
    <Wrapper>
      <Background />
      <Cursor />
      <Header city={city.name} />
      <Content>
        {city.name === undefined ? <Menu cities={cities} setCity={setCity} /> : <Detail name={city.name} />}
      </Content>
    </Wrapper>
  )
}

export default Home;
