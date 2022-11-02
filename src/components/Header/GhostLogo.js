import React from 'react'

import fingerprint from '../../assets/logo/animation/fingerprint.svg'
import circle_2 from '../../assets/logo/animation/cirkel_2.svg'
import circle_3 from '../../assets/logo/animation/cirkel_3.svg'
import animation_stylesheet from '../../assets/logo/animation/rotating_logo.css'

/* 
The below code can be used to display a static image.

import styled from 'styled-components'
import logo from 'assets/logo/sympo_logo_final.svg'

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

export default GhostLogo
*/



export default () => (
<div style = {animation_stylesheet}>
  <div class="wrapper">
      <img src= {fingerprint} alt= {"Solving Crime in No Time"} class="layer1"></img>
      <img src= {circle_2} alt= {"Solving Crime in No Time"} class="layer2"></img>
      <img src= {circle_3} alt= {"Solving Crime in No Time"} class="layer3"></img>
      <img src= {circle_2} alt= {"Solving Crime in No Time"} class="layer4"></img>
  </div>
</div>
)
