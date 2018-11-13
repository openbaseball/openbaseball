import React from 'react'
import { Flex } from 'rebass'
import ActionButton from '../../components/action-button'
import PageContainer from '../../components/page-container'

const Protected = () => (
  <PageContainer>
    <h1>You need to log in first</h1>
    <Flex flexDirection={'column'}>
      <ActionButton to={'/register'} text={'Log In'} />
    </Flex>
  </PageContainer>
)

export default Protected
