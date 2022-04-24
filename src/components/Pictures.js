import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Lightbox from './Lightbox'
import { forMobile } from '../constants/breakpoints'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transition: 0.5;
  animation: ${fadeIn} 2s;
`

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`

const Image = styled.img`
  width: calc(80vw / 3 - 35px);
  ${forMobile} {
    width: calc(80vw - 60px);
  }
  height: auto;
  margin-bottom: 25px;
  &:hover {
    cursor: zoom-in;
  }
`

const Pictures = ({name}) => {
  const [lightboxImage, setLightboxImage] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWidth(window.innerWidth));

  const openLightbox = (key) => {
    setLightboxImage(key);
  }

  let imagesCol0 = [];
  let imagesCol1 = [];
  let imagesCol2 = [];
  let imagesCol3 = [];
  for (let i = 0; i < 4; i++) {
    imagesCol0.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }
  for (let i = 4; i < 8; i++) {
    imagesCol1.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }
  for (let i = 8; i < 12; i++) {
    imagesCol2.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }
  for (let i = 0; i < 12; i++) {
    imagesCol3.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }

  return (
    <Wrapper>
      {lightboxImage && <Lightbox image={lightboxImage} setLightboxImage={setLightboxImage} />}
      {width >= 1024 ? <>
        <Column>
          {imagesCol0}
        </Column>
        <Column>
          {imagesCol1}
        </Column>
        <Column>
          {imagesCol2}
        </Column>
      </> : <Column>{imagesCol3}</Column>}
      
    </Wrapper>
  )
}

export default Pictures;
