import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 70px;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 5px;
`

const Name = ({name}) => (
  <Wrapper>
    {name}
  </Wrapper>
)

export default Name;
