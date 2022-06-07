import styled from 'styled-components'
import { media } from 'utilities/styles'

import logo from 'assets/logo/animation/fingerprint.svg'

export default styled.img.attrs({
  src: () => logo,
  alt: () => "Solving Crime in No Time - The strength of digital forensics"
})`
  display: block;
  height: 3em;

  ${media.small`margin: auto;`}
  ${media.not.small`
    float: left;
    padding: .25em;
  `}
`
