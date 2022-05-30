import React from 'react'

import Person from 'components/Person'
import TBD_person from 'assets/speakers/TBD_person.png'

const host = [
  {
    img: TBD_person,
    name: 'TBD',
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