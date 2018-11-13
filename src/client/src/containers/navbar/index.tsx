import { Flex } from '@rebass/grid'
import React from 'react'
import { Image } from 'rebass'
import styled from 'styled-components'
import { auth } from '../../store'
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
    <LinkButton to={'/'} text={'Open Baseball'} bold={true} />
    {auth.isAuthenticated() &&
    <LinkButton onClick={() => auth.logout()} right to={'/'} text={'LogOut'} />
    }
    {!auth.isAuthenticated() &&
    <LinkButton right to={'/register'} text={'Join'} red={true} />
    }
  </NavWrap>
)

export default NavBar
