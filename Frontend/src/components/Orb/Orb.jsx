import React from 'react'

import { useWindowSize } from '../../utils/useWindowSize.js';
import styled, { keyframes } from 'styled-components'

//ACCESS THE HOOK HERE 


// animate the orb 
// animate orb according to width and height of viewport 








function Orb() {

	const {width, height} = useWindowSize()
	// console.log(width, height);

  return (
    <OrbStyled width={width} height={height}  ></OrbStyled>
  )

  

}

const animateOrb = keyframes`
0%{
	transform: translate(0,0);
}
50%{
	/* transform: translate( ${props =>(props.width/2)}px, ${props=>props.height/2}px); */
	transform: translate(calc(var(--width) / 1), calc(var(--height) / 1));

}
100%{
	transform: translate(0,0);
}
`;

const OrbStyled = styled.div`
z-index: -1;
width: 400px;
height: 400px;
position: absolute;
border-radius:50%;
margin-left: -200px;
margin-top: -200px;
background: radial-gradient(circle, #ff0000bf, #f8f8f8);
filter: blur(150px);
filter: blur(10px);
/*animation: ${animateOrb} 10s alternate linear infinite;*/
--width: ${props => props.width}px;
--height: ${props => props.height}px;
`;

export default Orb;