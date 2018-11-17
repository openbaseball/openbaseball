import { push } from 'connected-react-router'
import { Dispatch } from 'redux'
import Auth from '../../utils/auth'
import User from './user'

export const REFRESH_USER = 'auth/REFRESH_USER'
export const DO_LOGOUT = 'auth/DO_LOGOUT'

// TODO: remove this export, this is a state leak
export const auth = new Auth()

export interface IAuth {
  user?: User
}

const initialState: IAuth = {
  user: undefined,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case REFRESH_USER:
      return {
        ...state,
        user: {...action.user},
      }

    case DO_LOGOUT:
      return {
        ...state,
        user: undefined,
      }

    default:
      return state
  }
}

export const login = () => {
  return () => {
    auth.login()
  }
}

export const logout = () => {
  return (dispatch: Dispatch) => {
    auth.logout()
    dispatch({
      type: DO_LOGOUT,
    })
  }
}

export const refreshUser = () => {
  return (dispatch: Dispatch) => {
    auth.scheduleRenewal()
    auth.getProfile()
      .then((user: User) => {
        dispatch({
          type: REFRESH_USER,
          user,
        })
      })
      // tslint:disable-next-line
      .catch((err: any) => {})
  }
}

export const loginCallback = () => {
  return (dispatch: Dispatch) => {
    auth.handleAuthentication()
      .then(() => {
        push('/')
        dispatch({
          type: REFRESH_USER,
        })
      })
      .catch(() => {
        push('/')
        dispatch({
          type: REFRESH_USER,
        })
      })
  }
}

export const isAuthenticated = (): boolean => {
  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = JSON.parse(String(localStorage.getItem('expires_at')))
  return new Date().getTime() < expiresAt
}
