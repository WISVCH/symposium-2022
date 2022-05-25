import React from 'react'

import { H2 } from 'components/lib'
import Event from './Event'

import events from './data'

export default () => (
  <div>
    <H2>18 October 2022</H2>
    {events.map((event, i) =>
      <Event key={i} {...event} />
    )}
  </div>
)
