import React from 'react'
import styled, { css, keyframes } from 'styled-components'


import logo from 'assets/logo/sympo_logo_final.svg'
import fingerprint from 'assets/logo/animation/fingerprint.svg'
import circle_2 from 'assets/logo/animation/cirkel_2.svg'
import animation_stylesheet from 'assets/logo/animation/rotating_logo.css'

const GhostLogo = styled.img.attrs({
  src: logo,
  alt: "Solving Crime in No Time"
})`
  position: absolute;
  top: 0;
  right: 0; bottom: 0;

  width: 75%;
  margin: auto;

  opacity: .3;

  transform: translate(15%, 0);
`

//var animation_logo = require('assets/logo/animation/index.html');

const Wrapper = styled.div`

  position: absolute;
  top: 0;
  right: 0; bottom: 0;

  width: 75%;
  margin: auto;

  opacity: .3;

  transform: translate(15%, 0);


`
const Layer1 = styled.img.attrs({
  src: fingerprint,
  alt: "Solving Crime in No Time"
})`
  width: 60%;
  height: 60%;
  margin: 20%;
  position: absolute;
`
const ckw = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Rotate = styled.div`
  display: inline-block;
  animation: ${ckw} 15.5s linear infinite;
`

// const Layer2 = styled.img.attrs({
//   src: circle_2,
//   alt: "Solving Crime in No Time"
// })`
//   transform-origin: 50% 50%;
//   display: inline-block;
//   /* <--- */
// `

const Layer2 = styled.img.attrs({
  src: circle_2,
  alt: "Solving Crime in No Time"
})


// const GhostLogo3 = GhostLogo2.extend`
// position: absolute;
//   top: 0;
//   right: 0; bottom: 0;

//   width: 75%;
//   margin: auto;

//   opacity: .3;

//   transform: translate(15%, 0);
// `


// export default GhostLogo


export default () => (
<div style = {animation_stylesheet}>
<div class="wrapper">
    <img src= {fingerprint} class="layer1"></img>
    <img src= {circle_2} class="layer2"></img>
</div>
</div>

)
