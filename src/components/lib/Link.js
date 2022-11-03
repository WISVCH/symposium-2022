import React from 'react'
import styled from 'styled-components'
import { theme } from '../../utilities/styles'

import { Link } from 'react-router-dom'

const ReactLink = styled(Link)`
  color: ${theme('colors','success')};
`

const HtmlLink = styled.a`
  color: ${theme('colors','success')};
`

export default ({href, ...rest}) => href
  ? <HtmlLink href={href} {...rest} />
  : <ReactLink {...rest} />
