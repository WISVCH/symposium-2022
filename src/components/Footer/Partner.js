import React from 'react'
import styled from 'styled-components'
import ch from 'assets/partners/ch_white.svg'

const Partner = styled.a`
  position: relative;

  display: block;
  padding-top: 40%;
`

const Logo = styled.img`
  position: absolute;
  left: 0; top: 0;
  right: 0; bottom: 0;

  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

export default ({ name, img, url }) => (
  <Partner className="Partner" href={url} target="_blank">
    {img === ch ?
      (<Logo src={img} alt={name}/>) : <Logo src={img} alt={name} style={{'filter': 'brightness(0%) invert(100%)'}}/>
    } 
  </Partner>
)
