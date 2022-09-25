import React from 'react'
import styled from 'styled-components'
import Cursor from './components/Cursor'
import Header from './components/Header'
import ThoughtPreview from './components/ThoughtPreview'

const Wrapper = styled.div`
  margin: -8px;
`

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
`

const ThoughtList = styled.div`
  padding: 200px 0 0 15vw;
`

const Thoughts = () => (
  <Wrapper>
    <Cursor />
    <Header />
    <Background />
    <ThoughtList>
      <ThoughtPreview />
    </ThoughtList>
  </Wrapper>
)

export default Thoughts;
