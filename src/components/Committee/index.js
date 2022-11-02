import React from 'react'

import { Row, Column } from '../lib'
import Person from '../Person'

import commissioners from './data'

export default () => (
  <Row>
    {commissioners.map(({ title, ...rest }, i) =>
      <Column key={i} size={4} mSize={6}>
        <Person
          revealed={true}
          title={title}
          vertical
          small
          className="Commissioner"
          {...rest}
        />
      </Column>
    )}
  </Row>
)
