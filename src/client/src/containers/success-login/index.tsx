import React from 'react'
import { auth, history } from '../../store'

const SuccessLogin = () => {
  auth.handleAuthentication()
  history.push('/')
  return (<div>Success!</div>)
}

export default SuccessLogin
