import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 70px;
  font-weight: 700;
  font-size: 30px;
`

const Name = ({name}) => (
  <Wrapper>
    {name}
  </Wrapper>
)

export default Name;
