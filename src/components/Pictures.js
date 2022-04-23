import React, { useState } from 'react'
import styled from 'styled-components'
import Lightbox from './Lightbox'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
`

const Image = styled.img`
  width: calc(80vw / 3 - 35px);
  height: auto;
  margin-bottom: 25px;
  &:hover {
    cursor: zoom-in;
  }
`

const Pictures = ({name}) => {
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (key) => {
    setLightboxImage(key);
  }

  let imagesCol0 = [];
  let imagesCol1 = [];
  let imagesCol2 = [];
  for (let i = 0; i < 4; i++) {
    imagesCol0.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }
  for (let i = 4; i < 8; i++) {
    imagesCol1.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }
  for (let i = 8; i < 12; i++) {
    imagesCol2.push(<Image key={name+"_"+i} src={require('../assets/' + name + '/' + i + '.jpg')} onClick={() => openLightbox(name+"_"+i)} />);
  }

  return (
    <Wrapper>
      {lightboxImage && <Lightbox image={lightboxImage} setLightboxImage={setLightboxImage} />}
      <Column>
        {imagesCol0}
      </Column>
      <Column>
        {imagesCol1}
      </Column>
      <Column>
        {imagesCol2}
      </Column>
    </Wrapper>
  )
}

export default Pictures;
