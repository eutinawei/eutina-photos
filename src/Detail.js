import React from 'react'
import styled from 'styled-components'
import Name from './components/Name'
import Pictures from './components/Pictures'

const Wrapper = styled.div`
  background: white;
  min-height: 100vh;
  padding: 130px calc(50vw - (((80vw) / 3 - 40px) * 3 + 60px) / 2);
`

const Detail = ({name}) => (
  <Wrapper>
    <Name name={name} />
    <Pictures name={name} />
  </Wrapper>
)

export default Detail;
