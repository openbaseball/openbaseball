import React from 'react'
import { Box, Card, Flex, Heading } from 'rebass'
import ActionButton from '../../components/action-button'
import Input from '../../components/input'
import PageContainer from '../../components/page-container'
import TextArea from '../../components/textarea'

const TeamCreate = () => (
  <PageContainer>
    <Flex flexDirection={'column'}>
      <Box>
        <Heading>New team</Heading>
      </Box>
      <Card
        p={3}
        mx={1}
        my={3}
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <Flex flexDirection={'column'}>
          <Heading fontSize={1}>Name:</Heading>
          <Input />
          <Heading fontSize={1}>Country:</Heading>
          <Input />
          <Heading fontSize={1}>City:</Heading>
          <Input />
          <Heading fontSize={1}>Description:</Heading>
          <TextArea />
          <ActionButton text={'Create'} to={'/team/newcoolteam'} />
        </Flex>
      </Card>
    </Flex>
  </PageContainer>
)

export default TeamCreate
