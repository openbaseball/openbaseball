import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { Flex, Heading, Image } from 'rebass'
import { bindActionCreators, Dispatch } from 'redux'
import ActionButton from '../../components/action-button'
import CenterBox from '../../components/center-box'
import PageContainer from '../../components/page-container'
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../modules/counter'
import WorldMapSvg from './world-map.svg'

const Home = () => (
  <PageContainer>
    <Flex alignItems={'center'} justifyContent={'center'}>
      <CenterBox>
        <Heading fontSize={5} m={2} mb={4}>
          Local baseball communities<br />
          around the world
        </Heading>
        <Heading fontSize={3} m={2} textAlign={'left'} fontWeight={'normal'}>
          What do you want?
        </Heading>
        <Flex flexDirection={'column'}>
          <ActionButton to={'/play'} text={'Play Baseball'}/>
          <ActionButton to={'/watch'} text={'Watch Games'} />
          <Image mt={3} src={WorldMapSvg} />
        </Flex>
      </CenterBox>
    </Flex>
  </PageContainer>
)

const mapStateToProps = ({ counter }: { counter: any }) => ({
  count: counter.count,
  isDecrementing: counter.isDecrementing,
  isIncrementing: counter.isIncrementing,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changePage: () => push('/about'),
      decrement,
      decrementAsync,
      increment,
      incrementAsync,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
