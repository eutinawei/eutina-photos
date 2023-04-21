import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background: url(${props => props.img}) no-repeat center/cover;
  border: 0px;
  width: 20px;
  height: 20px;
  margin-right: 20px;
`

const Icon = ({img, link, city}) => {
  const iconRef = useRef();

  useEffect(() => {
    if (city !== undefined && city !== "") {
      iconRef.current.style.filter = 'invert(100%)';
    }
  })

  return (
    <Wrapper ref={iconRef} img={img} onClick={()=> window.open(link, "_blank")}/>
  )
}

export default Icon;
