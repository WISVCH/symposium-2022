import React from 'react'
import styled from 'styled-components'
import { theme, media, darken } from 'utilities/styles'

import { H2, Text } from 'components/lib'
import Texture from 'components/Texture'

import Scott from 'assets/committee/Scott_cutout.png'

const IntroTexture = Texture.extend`
  ${media.not.medium`
    left: 60%; top: 0;
    right: -40%; bottom: -40%;

    background-size: 6em;
  `}

  ${media.medium`
    left: -20%; top: 70%;
    right: -40%; bottom: -30%;

    background-size: 8em;
  `}

  opacity: .2;

  filter: invert(100%);
`

const Introduction = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  border: ${theme('border','width')} solid ${props =>
    darken(props.theme.colors.primary, 20)};
  border-radius: ${theme('border','radius')};

  background-color: ${theme('colors','tertiary')};

  ${media.small`padding: 1em 2em;`}
  ${media.not.small`padding: 2em 4em;`}
`

const IntroText = Text.extend`
  ${media.not.medium`margin-right: 30%;`}
`

const Image = styled.img`
  ${media.not.medium`
      position: absolute;
      right: 0em; bottom: 0;

      width: 35%;
  `}

  ${media.medium`
      display: block;
      width: 60%;
      margin: -4em -1em -2em auto;
  `}

  ${media.small`
    width: 80%;
    margin: -4em -1em -1em auto;
  `}
`

export default () => (
  <Introduction>
    <IntroTexture size="4em" />
    <H2>Introducing the Symposium</H2>
    <IntroText>
      While advanced technology opens the door to many more criminal activities, it has also had great benefits for the exact opposite. Nowadays, criminal investigation is heavily influenced by computer science and mathematics. <br />
      <br />
      During this symposium, we aim to dive deep into the many different sides of the world of criminal investigation and the modern technology that they use to solve crimes. We will feature multiple experts that work to use their computer science and mathematical knowledge to apprehend criminals. They are very excited to share their knowledge with you and give you a peek into the world of criminal investigation. <br />
      <br />
      We are proud to welcome you all to our symposium: “Solving Crime in No Time, the Strength of Digital Forensics”, organized by the study association ‘W.I.S.V. Christiaan Huygens’.<br />
      <br />
      See you on October 18th! <br />
      <br />
      On behalf of the Symposium Committee, <br />
      Scott Jochems
    </IntroText>
    <Image src={Scott} alt="Scott Jochems" />
  </Introduction>
)
