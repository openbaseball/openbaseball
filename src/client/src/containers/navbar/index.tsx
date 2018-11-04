import { Flex } from '@rebass/grid'
import React from 'react'
import { Image } from 'rebass'
import styled from 'styled-components'
import LinkButton from './link-button'
import LogoImage from './logo.svg'

const NavWrap = styled(Flex)`
  background-color: ${(props) => props.theme.components.navbar.background};
`

const LogoContainer = styled(Image)`
  max-width: 30px;
  max-height: 30px;
  margin-top: auto;
  margin-bottom: auto;
`

const NavBar = () => (
  <NavWrap width={'100%'}>
    <LogoContainer src={LogoImage} ml={3} />
    <LinkButton to={'/'} text={'Open Baseball'} />
    <LinkButton to={'/teams'} text={'Teams'} />
    <LinkButton to={'/players'} text={'Players'} />
    <LinkButton to={'/championships'} text={'Championships'} />
    <LinkButton to={'/about'} text={'About'} />
  </NavWrap>
)

export default NavBar
