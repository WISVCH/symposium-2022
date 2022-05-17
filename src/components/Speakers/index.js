import React from 'react'

import speakers from './data'

import { Text, Row, Column } from 'components/lib'
import Speaker from './Speaker'

export default () => (
  <div>
    {speakers.map((speaker, i) => (
      <Row key={i}>
        {i % 2 ? <Column size={6} mSize={4} sSize={12}>
          <Text style={{"-webkit-line-clamp": "10"}}> {speaker.abstract} </Text>
          </Column>
           : null}
        <Column size={6} mSize={8} sSize={12}>
          <Speaker {...speaker} side={i % 2} />          
        </Column>
        {i % 2 ? null : <Column size={6} mSize={4} sSize={12}>
          <Text style={{"-webkit-line-clamp": "9"}}> {speaker.abstract}</Text>
          </Column>}
      </Row>
    ))}
  </div>
)
