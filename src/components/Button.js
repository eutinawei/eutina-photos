import React, { useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background: transparent;
  border: 0px;
  font-size: 20px;
  color: #ffffff;
  margin-right: 20px;
`

const Button = ({title}) => {
  const titleRef = useRef(null);
  
  const mouseEnter = () => {
    titleRef.current.style.fontWeight = 'bold';
  }

  const mouseLeave = () => {
    titleRef.current.style.fontWeight = 'normal';
  }

  return (
    <Wrapper ref={titleRef} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
      {title}
    </Wrapper>
  )
}

export default Button;
