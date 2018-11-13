import { Flex } from '@rebass/grid'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import AboutPage from './containers/about'
import HomePage from './containers/home'
import NavBar from './containers/navbar'
import PlayBeginningPage from './containers/play-beginning'
import PlayerPage from './containers/player'
import ProtectedPage from './containers/protected'
import RegistrationPage from './containers/registration'
import SuccessLoginPage from './containers/success-login'
import TeamCreatePage from './containers/team-create'
import './main.css'
import { auth } from './store'

const AppContainer = styled(Flex)`
  font-family: "Play", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`
AppContainer.defaultProps = {
  flexDirection: 'column',
}

const protect = (component: any) => (
  auth.isAuthenticated()
    ? component
    : ProtectedPage
)

const App = () => (
  <AppContainer>
    <Normalize />
    <NavBar />
    <Flex width={'100%'}>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/play' component={PlayBeginningPage} />
      <Route exact path='/play/new-team' component={protect(TeamCreatePage)} />
      <Route exact path='/player/:id' component={PlayerPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/callback' component={SuccessLoginPage} />
      <Route exact path='/register' component={RegistrationPage} />
    </Flex>
  </AppContainer>
)

export default App
