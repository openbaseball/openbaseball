import React from 'react'
import { history } from '../../store'
import Auth from '../../utils/auth'

const auth = new Auth()

const SuccessLogin = () => {
  auth.handleAuthentication()
  history.push('/')
  return (<div>Success!</div>)
}

export default SuccessLogin
