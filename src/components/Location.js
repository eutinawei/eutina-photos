import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import boston from '../assets/boston.jpg'
import chicago from '../assets/chicago.jpg'
import dc from '../assets/dc.jpg'

const Wrapper = styled.div`
  width: 100px;
  margin-left: -100px;
`

const Dot = styled.button`
  background-color: #ffffff;
  border-radius: 50%;
  border: 0px;
  float: right;
  transition: 0.5s;
`

const Title = styled.div`
  color: #ffffff;
  text-align: right;
  margin-top: 15px;
  float: right;
  opacity: 1;
  transition: opacity 0.5s ease-out;
`

const Name = styled.div`
  font-size: 30px;
`

const Year = styled.div`
  font-size: 20px;
  margin-top: 5px;
`

const TransitDot = styled.div`
  position: fixed;
  width: 0px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 0px;
  transform: translate(-50%, -50%);
`

const Location = ({isActive, name, year, backgroundRef, setCity}) => {
  const dotRef = useRef();
  const titleRef = useRef();
  const transitDotRef = useRef();

  const ChangeDotRef = (width, height, marginTop) => {
    dotRef.current.style.width = width;
    dotRef.current.style.height = height;
    dotRef.current.style.marginTop = marginTop;
  }

  const ChangeTitleRef = (opacity, weight) => {
    titleRef.current.style.fontWeight = weight;
    titleRef.current.style.opacity = opacity;
  }

  const ChangeDotSize = (active, hover) => {
    if (active) {
      ChangeDotRef('25px', '25px', '0px');
      ChangeTitleRef('1', 'normal');
      isActive = true;
    }
    else if (hover) {
      ChangeDotRef('35px', '35px', '-5px');
      ChangeTitleRef('1', 'bold');
    }
    else{
      ChangeDotRef('15px', '15px', '6px');
      ChangeTitleRef('0', '500px');
      isActive = false;
    }
  }
  
  const handleScroll = () => {
    let position = dotRef.current.getBoundingClientRect().x;
    if (position >= window.innerWidth / 3 && position <= window.innerWidth / 3 * 2){
      ChangeDotSize(true, false);
    }
    else {
      ChangeDotSize(false, false);
    }
  }

  useEffect(() => {
    ChangeDotSize(isActive, false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const mouseEnter = () => {
    if (name === "boston") backgroundRef.current.style.background = `url(${boston}) no-repeat center/cover`;
    if (name === "chicago") backgroundRef.current.style.background = `url(${chicago}) no-repeat center/cover`;
    if (name === "washington dc") backgroundRef.current.style.background = `url(${dc}) no-repeat center/cover`;
    backgroundRef.current.style.opacity = '1';
    ChangeDotSize(false, true);

    let x = dotRef.current.getBoundingClientRect().x;
    let y = dotRef.current.getBoundingClientRect().y;
    transitDotRef.current.style.top = y + 'px';
    transitDotRef.current.style.left = x + 'px';
  }
  
  const mouseLeave = () => {
    ChangeDotSize(isActive, false);
    backgroundRef.current.style.opacity = '0';
  }

  const toDetailPage = () => {
    transitDotRef.current.style.transition = '1s';
    transitDotRef.current.style.width = '300vw';
    transitDotRef.current.style.height = '300vw';
    setTimeout(function() {setCity(name);}, 500);
  }

  return (
    <Wrapper>
      <Dot isActive ref={dotRef} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} onClick={() => toDetailPage()} />
      <TransitDot ref={transitDotRef} />
      <Title ref={titleRef}>
        <Name>{name}</Name>
        <Year>{year}</Year>
      </Title>
    </Wrapper>
  )
}

export default Location;
