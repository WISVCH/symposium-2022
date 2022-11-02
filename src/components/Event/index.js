import React from 'react'
import styled from 'styled-components'
import { theme } from '../../utilities/styles'

import { H2, H3, Link, Text, Markdown, Row, Column } from '../lib'
import Section from '../Section'

import speakers from '../Speakers/data'

const format = d =>
  d.toUTCString().split(' ')[4].substring(0, 5)

const Image = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 100%;
  border-radius: ${theme('border','radius')};

  background: url(${props => props.src}) no-repeat center / cover;
`

const TextLabel = styled.strong`
  display: inline-block;
  width: 5em;

  color: ${theme('colors','text')};

  &::after {
    content: ':';
  }
`

const Event = ({start, end, meta, title, bgImage, abstract, name, bio, slides}) =>
  <div>
    <Section>
      <Row rtl>
        <Column size={6} mSize={12}>
          <Image src={bgImage} alt={title} />
        </Column>
        <Column size={6} mSize={12}>
          <H2>{title}</H2>
          {meta ? <Text>
            <TextLabel>Time</TextLabel>{format(start)} - {format(end)}<br />
            <TextLabel>Speaker</TextLabel>{meta}
          </Text> : <Text>
            <TextLabel>Time</TextLabel>{format(start)} - {format(end)}<br />
          </Text>}
        </Column>
      </Row>
    </Section>
    <Section>
      {slides ? <Link href={slides} download="Slides.pdf"> Download the slides here </Link> : null}
      </Section>
    <Section id="abstract">
      <H3>About</H3>
      <Markdown source={abstract} />
      <Markdown source={bio} />
      
    </Section>
  </div>

export default ({speaker, ...rest}) => {
  const {abstract, name } = speakers.find(s => s.name === speaker)

  return <Event
    abstract={abstract ? abstract : 'Coming soon'}
    name={name}
    {...rest} />
}
