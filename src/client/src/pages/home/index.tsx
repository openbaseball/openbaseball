import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../modules/counter'

const Home = (props: any) => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ counter }: { counter: any }) => ({
  count: counter.count,
  isDecrementing: counter.isDecrementing,
  isIncrementing: counter.isIncrementing,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
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
