import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAuth, loginCallback } from '../../modules/auth'

const SuccessLogin = (props: any) => {
  props.loginCallback()
  return (<div>Success!</div>)
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loginCallback,
    },
    dispatch,
  )

const mapStateToProps = ({ auth }: { auth: IAuth }) => ({
  user: auth.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessLogin)
