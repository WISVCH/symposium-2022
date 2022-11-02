import React from 'react'

import Person from '../Person'
import TBD_person from '../../assets/speakers/gabriella-ader.png'

const host = [
  {
    img: TBD_person,
    name: 'Gabriella Adèr',
    title: 'Host',
  },
]

const Host = () => (
    <div className="Host">
      {host.map(({ title, ...rest }, i) =>
          <Person key={i} revealed={true} title={`${title}`} small horizontal {...rest} />
      )}
    </div>
)

export default Host