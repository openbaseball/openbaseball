import React from 'react'
import ReactDOM from 'react-dom'
import SuccessLogin from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SuccessLogin />, div)
  ReactDOM.unmountComponentAtNode(div)
})
