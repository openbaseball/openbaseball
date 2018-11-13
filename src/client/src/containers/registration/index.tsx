import React from 'react'
import PageContainer from '../../components/page-container'
import { auth } from '../../store'

const Registration = () => (
  <PageContainer>
    <h1>Please wait...</h1>
    <p>Redirecting to login page...</p>
    {auth.login()}
  </PageContainer>
)

export default Registration
