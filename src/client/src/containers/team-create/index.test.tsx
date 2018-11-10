import React from 'react'
import ReactDOM from 'react-dom'
import TeamCreate from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TeamCreate />, div)
  ReactDOM.unmountComponentAtNode(div)
})
