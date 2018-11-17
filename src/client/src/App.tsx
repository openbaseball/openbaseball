import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Flex } from 'rebass'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import AboutPage from './containers/about'
import HomePage from './containers/home'
import NavBar from './containers/navbar'
import PlayBeginningPage from './containers/play-beginning'
import PlayerPage from './containers/player'
import ProtectedPage from './containers/protected'
import SuccessLoginPage from './containers/success-login'
import TeamCreatePage from './containers/team-create'
import './main.css'
import { IAuth, isAuthenticated, refreshUser } from './modules/auth'
import User from './modules/auth/user'

const AppContainer = styled(Flex)`
  font-family: "Play", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`
AppContainer.defaultProps = {
  flexDirection: 'column',
}

const Content = styled(Flex)`
  width: 100%;
`

interface IAppProps {
  user?: User
  refreshUser: any
}

class App extends PureComponent<IAppProps> {
  public render() {
    return (<AppContainer>
      <Normalize />
      <NavBar />
      <Content>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/play' component={PlayBeginningPage} />
        <Route exact path='/play/new-team' component={this.protect(TeamCreatePage)} />
        <Route exact path='/player/:id' component={PlayerPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/callback' component={SuccessLoginPage} />
      </Content>
    </AppContainer>)
  }

  public componentDidMount() {
    this.props.refreshUser()
  }

  protected protect = (component: any) => isAuthenticated() ? component : ProtectedPage
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      refreshUser,
    },
    dispatch,
  )

const mapStateToProps = ({ auth }: { auth: IAuth }) => ({
  user: auth.user,
})

export default withRouter<any>(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
