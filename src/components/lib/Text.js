import styled, { css } from 'styled-components'
import { opacity } from 'utilities/styles'

const Text = styled.p`
  line-height: ${props => props.theme.lineHeight};
  color: ${props => opacity(props.theme.colors.text, props.theme.opacity.text)};

  ${props => props.size && css`font-size: ${props.size}em;`}

  ${props => props.accent && css`color: ${props.theme.colors.accent};`}

  ${props => props.center && css`text-align: center;`}


  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`

export default Text
