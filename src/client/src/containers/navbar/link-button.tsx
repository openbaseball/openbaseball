import { Box } from '@rebass/grid'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

interface ILinkButtonContainer {
  right?: boolean
}

const LinkButtonContainer = styled(Box)`
  margin-left: ${(props: ILinkButtonContainer) => props.right ? 'auto' : 'inherit'} !important;
  > a {
    color: ${(props) => props.theme.components.navbar.text} !important;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    ${fontSize}
  }
`
LinkButtonContainer.defaultProps = {
  fontSize: 1,
  p: 3,
}

interface ILinkButton {
  to: string,
  text: string,
  right?: boolean,
}

export default (props: ILinkButton) => (
  <LinkButtonContainer right={props.right}>
    <Link to={props.to}>{props.text}</Link>
  </LinkButtonContainer>
)
