import { Flex } from '@rebass/grid'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import AboutPage from './containers/about'
import HomePage from './containers/home'
import NavBar from './containers/navbar'
import PlayerPage from './containers/player'

const AppContainer = styled(Flex)`
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`
AppContainer.defaultProps = {
  flexDirection: 'column',
}

const App = () => (
  <AppContainer>
    <Normalize />
    <NavBar />
    <Flex width={'100%'}>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/player/:id' component={PlayerPage} />
      <Route exact path='/about' component={AboutPage} />
    </Flex>
  </AppContainer>
)

export default App
