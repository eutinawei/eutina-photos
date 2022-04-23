import React, { useEffect } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Home from './Home'
import sea from './assets/sea.png'

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: -8px;
  font-family: "Courier";
  background: url(${sea}) no-repeat center/cover;
`

const Text = styled.div`
  position: absolute;
  right: 20%;
  top: 38%;
  font-size: 50px;
  text-align: right;
  color: #ffffff;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.05);
`

const App = ({root}) => {
  useEffect(() => {
    setTimeout(function() {root.render(<Home />);}, 16000);
  })
  return (
    <Wrapper>
      <Text>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('hello,<br>this is eutina,<br>an amateur photographer<br>based in pittsburgh.')
              .pauseFor(100)
              .changeDeleteSpeed(0.01)
              .deleteAll()
              .start();
          }}
        />
      </Text>
    </Wrapper>
  )
}

export default App;
