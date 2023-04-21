import React, { useRef } from 'react'
import styled from 'styled-components'
import Location from './Location'
import Line from './Line'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100vh / 2);
  left: calc(100vw / 2);
  display: flex;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -5;
  opacity: 1;
  transition: opacity 0.8s;
`

const Menu = ({cities, setCity}) => {
  const backgroundRef = useRef(null);
  
  return (
    <>
      <Wrapper>
        {cities.map(city => (
          <div key={city.name}>
            <Location city={city} setCity={setCity} backgroundRef={backgroundRef} />
            <Line />
          </div>
        ))}
      </Wrapper>
      <Background ref={backgroundRef} />
    </>
  )
}

export default Menu;
