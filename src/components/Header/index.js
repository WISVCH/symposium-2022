import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper, H1, H2, Text, Button } from 'components/lib'
import GhostLogo from './GhostLogo'
import ScrollDown from './ScrollDown'

const Header = styled.header`
  position: relative;
  margin-bottom: calc(40vmax - 20vw);
`

const HeaderContent = Wrapper.extend`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 80vh;
  padding-top: 2em;
  padding-bottom: 2em;
`

const Title = H1.extend`
  font-size: 9vw;
  margin-bottom: 0;

  ${media.not.large`font-size: 4em;`}
`

const Tagline = H2.extend`
  font-size: 6vw;
  margin: 0;

  ${media.not.large`font-size: 2em;`}
`

const Info = Text.extend`
  margin: 2em 0;
`

export default () => (
  <Header>
    <HeaderContent>
      <GhostLogo />
      <Title>Solving Crime in No Time</Title>
      <Tagline>The Strength of Digital Forensics</Tagline>
      <Info>
        October 18, 2022&nbsp;&nbsp;&nbsp;&nbsp;
        TU Delft - Aula Congrescentrum
      </Info>
      <Button primary large to="/tickets">Get your ticket now</Button>
    </HeaderContent>
    <ScrollDown>&darr;</ScrollDown>
  </Header>
)
