import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from 'utilities/styles'
import slug from 'utilities/slug'

import speakers from './data'

import { Text, Column } from 'components/lib'
import Speaker from './Speaker'


const SpeakerRow = styled(Link)`
display: block;
border-radius: ${theme('border','radius')};

background-color: ${theme('colors','tertiary')}

margin-left: -${props => props.theme.columns.gap/2}px;
margin-right: -${props => props.theme.columns.gap/2}px;
margin-bottom: 1em;
margin-top: 1em;

&:after {
  content: '';
  display: block;
  clear: both;
}

display: flex;
align-items: ${props => props.verticalAlign || 'center'};
flex-direction: ${props => props.rtl ? 'row-reverse' : 'row'};
flex-wrap: wrap;

&:hover {
  box-shadow: 0 0 0 ${theme('border','width')} ${theme('colors','primary')};
}
`

export default () => (
  <div>
    {speakers.map((speaker, i) => (
      <SpeakerRow to={`/event/${speaker.event}`} key={i}>
        {i % 2 ? <Column size={6} mSize={4} sSize={12}>
          <Text style={{"-webkit-line-clamp": "9"}}> {speaker.abstract} </Text>
          </Column>
           : null}
        <Column size={6} mSize={8} sSize={12}>
          <Speaker {...speaker} side={i % 2} />          
        </Column>
        {i % 2 ? null : <Column size={6} mSize={4} sSize={12}>
          <Text style={{"-webkit-line-clamp": "9"}}> {speaker.abstract}</Text>
          </Column>}
      </SpeakerRow>
    ))}
  </div>
)
