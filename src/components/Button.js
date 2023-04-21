import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background: transparent;
  border: 0px;
  font-size: 20px;
  color: #ffffff;
  margin-right: 20px;
`

const Button = ({title, city}) => {
  const titleRef = useRef(null);
  
  const mouseEnter = () => {
    titleRef.current.style.fontWeight = 'bold';
  }

  const mouseLeave = () => {
    titleRef.current.style.fontWeight = 'normal';
  }

  const clickAction = () => {
    if (title === "eutina wei") {
      window.location.assign("/home");
    }
    if (title === "thoughts") {
      window.location.assign("/thoughts");
    }
    if (title === "about") {
      window.location.assign("/about");
    }
  }

  useEffect(() => {
    if (city !== undefined && city !== "") {
      titleRef.current.style.color = "black";
    }
  })

  return (
    <Wrapper ref={titleRef} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} onClick={() => clickAction()}>
      {title}
    </Wrapper>
  )
}

export default Button;
