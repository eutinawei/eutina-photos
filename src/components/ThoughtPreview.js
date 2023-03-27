import React from 'react'
import styled from 'styled-components'
import thoughts from '../constants/thoughts'
import { forMobile } from '../constants/breakpoints'

const Link = styled.a`
  all: unset;
  &:hover {
    color: #444444;
  }
`

const ThoughtWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${forMobile} {
    flex-direction: column;
  }
  padding-bottom: 70px;
`

const Image = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${forMobile} {
    padding: 30px 0 0 0;
  }
  padding: 30px 0 30px 40px;
  width: 50vw;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const Date = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
`

const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3; 
  -webkit-box-orient: vertical;
  line-height: 22px;
`

const ThoughtPreview = () => (
  <>
    {thoughts.map(thought => (
      <Link href={`${process.env.PUBLIC_URL}/thought/${thought.key}`}>
        <ThoughtWrapper key={thought.key}>
          <Image src={require('../assets/thoughts/' + thought.image + '.jpg')}/>
          <TextWrapper>
            <Title>{thought.title}</Title>
            <Date>{thought.date}</Date>
            <Text>{thought.text}</Text>
          </TextWrapper>
        </ThoughtWrapper>
      </Link>
    ))}
  </>
)

export default ThoughtPreview
