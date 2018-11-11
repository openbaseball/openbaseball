import { Box } from '@rebass/grid'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fontSize, space } from 'styled-system'

interface ILinkButtonContainer {
  right?: boolean
  bold?: boolean
  red?: boolean
}

const LinkButtonContainer = styled(Box)`
  margin-left: ${(props: ILinkButtonContainer) => props.right ? 'auto' : 'inherit'};
  > a {
    color: ${(props) => props.theme.components.navbar.text} !important;
    background-color: ${(props) => props.red ? props.theme.colors.accent : 'inherit'};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${(props: ILinkButtonContainer) => props.bold ? '700' : '500'};
    ${fontSize}
    ${space}
  }
`
LinkButtonContainer.defaultProps = {
  fontSize: 1,
  p: 3,
}

interface ILinkButton {
  to: string
  text: string
  right?: boolean
  onClick?: any
  bold?: boolean
  red?: boolean
}

export default (props: ILinkButton) => (
  <LinkButtonContainer right={props.right} bold={props.bold} red={props.red}>
    {props.onClick &&
      <Link onClick={props.onClick} to={props.to}>{props.text}</Link>
    }
    {!props.onClick &&
      <Link to={props.to}>{props.text}</Link>
    }
  </LinkButtonContainer>
)
