import React from 'react'
import ReactDOM from 'react-dom'
import Registration from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Registration />, div)
  ReactDOM.unmountComponentAtNode(div)
})