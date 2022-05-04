import React from 'react'

import Person from 'components/Person'

import gJongbloed from 'assets/RvA/g_Jongbloed.png'
import cWitteveen from 'assets/RvA/c_Witteveen.jpg'
import rFokkink from 'assets/RvA/r_Fokkink.jpg'


const rva = [
  {
    img: gJongbloed,
    name: 'Prof.dr.ir. G. Jongbloed',
    title: 'Professor of Statistics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    img: cWitteveen,
    name: 'Prof.dr. C. Witteveen',
    title: 'Professor in Algorithmics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    img: rFokkink,
    name: 'dr. R.J. Fokkink',
    title: 'Assistant Professor in Applied Mathematics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
]

const RvA = () => (
  <div className="RvA">
    {rva.map(({ title, faculty, ...rest }, i) =>
      <Person key={i} revealed={true} title={`${title} | ${faculty}`} small horizontal {...rest} />
    )}
  </div>
)

export default RvA
