import { Box } from '@rebass/grid'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const LinkButton = styled(Box)`
  > a {
    color: ${(props) => props.theme.components.navbar.text} !important;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    ${fontSize}
  }
`
LinkButton.defaultProps = {
  fontSize: 1,
  p: 3,
}

interface ILinkButton {
  to: string,
  text: string,
}

export default (props: ILinkButton) => (
  <LinkButton>
    <Link to={props.to}>{props.text}</Link>
  </LinkButton>
)
