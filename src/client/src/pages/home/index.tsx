import { push } from 'connected-react-router'
import { darken } from 'polished'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../modules/counter'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.colors.main};
  border: 2px solid ${(props) => props.theme.colors.main};

  :disabled {
    color: ${(props) => darken(0.3, props.theme.colors.main)};
    border: 2px solid ${(props) => darken(0.3, props.theme.colors.main)};
  }
`

const Home = (props: any) => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <Button onClick={props.increment}>Increment</Button>
      <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </Button>
    </p>

    <p>
      <Button onClick={props.decrement}>Decrement</Button>
      <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </Button>
    </p>

    <p>
      <Button onClick={() => props.changePage()}>
        Go to about page via redux
      </Button>
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
