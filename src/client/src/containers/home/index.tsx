import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { Flex, Heading, Image } from 'rebass'
import { bindActionCreators, Dispatch } from 'redux'
import CenterBox from '../../components/CenterBox'
import PageContainer from '../../components/PageContainer'
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../modules/counter'
import ActionButton from './action-button'
import WorldMapSvg from './world-map.svg'

const Home = () => (
  <PageContainer>
    <Flex alignItems={'center'} justifyContent={'center'}>
      <CenterBox>
        <Heading fontSize={5} m={4}>
          Find local baseball community<br />
          around the world!
        </Heading>
        <Flex flexDirection={'column'}>
          <ActionButton text={'Play Baseball'}/>
          <ActionButton text={'Watch Games'} />
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
