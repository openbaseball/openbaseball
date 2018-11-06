import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { Box, Flex, Heading } from 'rebass'
import { bindActionCreators, Dispatch } from 'redux'
import PageContainer from '../../components/PageContainer'

interface IPlayerProps {
  playerName: string,
}

const Player = (props: IPlayerProps) => (
  <PageContainer>
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Box>
        <Heading fontSize={5} m={4}>
          Info about {props.playerName}
        </Heading>
      </Box>
    </Flex>
  </PageContainer>
)

const mapStateToProps = ({ counter }: { counter: any }) => ({
  playerName: 'Test Player',
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changePage: () => push('/about'),
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
