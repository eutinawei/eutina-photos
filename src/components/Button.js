import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background: transparent;
  border: 0px;
  font-family: "Courier";
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  margin-right: 20px;
`

const Button = ({title}) => (
  <Wrapper>
    {title}
  </Wrapper>
)

export default Button;
