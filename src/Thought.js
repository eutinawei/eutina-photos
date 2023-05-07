import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { forMobile } from './constants/breakpoints'
import Cursor from './components/Cursor'
import Header from './components/Header'
import thoughts from './constants/thoughts'

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

const ThoughtWrapper = styled.div`
  padding: 150px 0 150px 15vw;
  width: 70vw;
`

const Image = styled.img`
  width: 70vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 10px;
  ${forMobile} {
    height: 20vh;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-top: 70px;
`

const Date = styled.div`
  padding-top: 50px;
  text-align: right;
`

const Text = styled.div`
  padding-top: 30px;
  line-height: 25px;
  white-space: pre-wrap;
`

const Thought = () => {
  const params = useParams();
  let thisThought = ""
  for (const thought of thoughts) {
    if (thought.key === params.key) {
      thisThought = thought
      break
    }
  }
  return (
    <Wrapper>
      <Cursor />
      <Header city="thought" />
      <Background />
      <ThoughtWrapper>
        <Image src={require('./assets/thoughts/' + thisThought.image + '.jpg')} />
        <Title>{thisThought.title}</Title>
        <Text>{thisThought.text}</Text>
        <Date>{thisThought.date}</Date>
      </ThoughtWrapper>
    </Wrapper>
  )
}

export default Thought
