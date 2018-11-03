import { Flex } from '@rebass/grid'
import React from 'react'
import styled from 'styled-components'
import LinkButton from './link-button'

const NavWrap = styled(Flex)`
  background-color: ${(props) => props.theme.components.navbar.background};
`

const NavBar = () => (
  <NavWrap width={'100%'}>
    <LinkButton to={'/'} text={'Open Baseball'} />
    <LinkButton to={'/teams'} text={'Teams'} />
    <LinkButton to={'/players'} text={'Players'} />
    <LinkButton to={'/championships'} text={'Championships'} />
    <LinkButton to={'/about'} text={'About'} />
  </NavWrap>
)

export default NavBar
