import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s;
`

const Exit = styled.button`
  position: fixed;
  top: 10vh;
  right: 10vw;
  font-family: 'Arial';
  font-size: 30px;
  background: transparent;
  border: 0;
`

const Image = styled.img`
  width: auto;
  max-width: 50%;
  height: auto;
  max-height: 80%;
  object-fit: cover;
`

const Lightbox = ({image, setLightboxImage}) => {
  const exitRef = useRef();

  const mouseEnter = (ref) => {
    ref.current.style.fontWeight = "bold";
  }

  const mouseLeave = (ref) => {
    ref.current.style.fontWeight = "normal";
  }

  return (
    <Wrapper>
      <Exit ref={exitRef} onMouseEnter={() => mouseEnter(exitRef)} onMouseLeave={() => mouseLeave(exitRef)} onClick={() => setLightboxImage("")}>X</Exit>
      <Image src={require(`../assets/${image.split("_")[0]}/${image.split("_")[1]}.jpg`)}/>
    </Wrapper>
  )
}

export default Lightbox;
