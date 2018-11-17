import React from 'react'
import { Flex } from 'rebass'
import ActionButton from '../../components/action-button'
import PageContainer from '../../components/page-container'
// TODO: never use this in this way
import { auth } from '../../modules/auth'

const Protected = () => (
  <PageContainer>
    <h1>You need to log in first</h1>
    <Flex flexDirection={'column'}>
      <ActionButton onClick={() => {auth.login()}} text={'Log In'} />
    </Flex>
  </PageContainer>
)

export default Protected
