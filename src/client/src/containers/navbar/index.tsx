import React from 'react'
import { connect } from 'react-redux'
import { Flex } from 'rebass'
import { Image } from 'rebass'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import {
  IAuth,
  isAuthenticated,
  login,
  logout,
} from '../../modules/auth'
import LinkButton from './link-button'
import LogoImage from './logo.svg'

const NavWrap = styled(Flex)`
  background-color: ${(props) => props.theme.components.navbar.background};
  width: 100%;
`

const LogoContainer = styled(Image)`
  max-width: 30px;
  max-height: 30px;
  margin-top: auto;
  margin-bottom: auto;
`

const NavBar = (props: any) => (
  <NavWrap>
    <LogoContainer src={LogoImage} ml={3} />
    <LinkButton to={'/'} text={'Open Baseball'} bold={true} />
    {isAuthenticated() &&
      <LinkButton onClick={() => props.logout()} right to={'/'} text={'LogOut'} />
    }
    {!isAuthenticated() &&
      <LinkButton onClick={() => props.login()} right to={'/'} text={'Join'} red={true} />
    }
  </NavWrap>
)

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
    },
    dispatch,
  )

const mapStateToProps = ({ auth }: { auth: IAuth }) => ({
  user: auth.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar)
