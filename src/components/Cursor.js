import React from 'react';
import styled from 'styled-components'
import useMousePosition from "../hooks/useMousePosition";

const BigCursor = styled.div`
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  background-color: white;
  z-index: 10000;
  border: 2px solid white;
  height: 30px;
  width: 30px;
  transition: all 500ms ease-out;
`

const SmallCursor = styled.div`
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  background-color: white;
  z-index: 10000;
  border: 2px solid white;
  height: 5px;
  width: 5px;
`

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <BigCursor
        style={{ left: `${x}px`, top: `${y}px` }}/>
      <SmallCursor
        style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
};

export default Cursor;
