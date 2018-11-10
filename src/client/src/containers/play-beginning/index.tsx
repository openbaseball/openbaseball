import React from 'react'
import { Flex, Heading } from 'rebass'
import ActionButton from '../../components/action-button'
import CenterBox from '../../components/center-box'
import PageContainer from '../../components/page-container'

const PlayBeginning = () => (
  <PageContainer>
    <Flex flexDirection={'column'}>
      <CenterBox>
        <Heading mt={2} >How do you wish to start?</Heading>
        <Flex mt={4} flexDirection={'column'}>
          <ActionButton text={'Find existing team'} to={'/play/find-team'}/>
          <ActionButton text={'Create a new team'} to={'/play/new-team'}/>
        </Flex>
      </CenterBox>
    </Flex>
  </PageContainer>
)

export default PlayBeginning
