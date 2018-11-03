import { Flex } from '@rebass/grid'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import About from './containers/about'
import Home from './containers/home'
import NavBar from './containers/navbar'

const BasicApp = styled(Flex)`
  font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
`

const App = () => (
  <BasicApp flexDirection={'column'}>
    <Normalize />
    <NavBar />
    <Flex width={'100%'}>
      <main>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </main>
    </Flex>
  </BasicApp>
)

export default App
