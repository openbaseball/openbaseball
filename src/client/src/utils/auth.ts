import auth0, { Auth0DecodedHash } from 'auth0-js'
import { history } from '../store'

const currentHost = window.location.href.split('/').slice(0, 3).join('/')
const options = {
  // TODO: move ids outside
  clientID: 'O3IQP0KYJKdlOxelt1duBEI35PiKiTOm',
  domain: 'openbaseballorg.auth0.com',
  redirectUri: `${currentHost}/callback`,
  responseType: 'token id_token',
  scope: 'openid profile',
}

export default class Auth {
  public userProfile: any
  public tokenRenewalTimeout: any

  public auth0 = new auth0.WebAuth(options)

  constructor() {
    this.scheduleRenewal()
  }

  public login() {
    this.auth0.authorize()
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        history.push('/')
      } else if (err) {
        history.push('/')
        console.log(err)
        console.log(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  public setSession(authResult: Auth0DecodedHash) {
    if (authResult.expiresIn && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime(),
      )

      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)

      // schedule a token renewal
      this.scheduleRenewal()

      // navigate to the home route
      history.replace('/')
    } else {
      console.error(authResult)
    }
  }

  public getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }
    return accessToken
  }

  public getProfile(cb: any) {
    const accessToken = this.getAccessToken()
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      cb(err, profile)
    })
  }

  public logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('scopes')
    this.userProfile = null
    clearTimeout(this.tokenRenewalTimeout)
    // navigate to the home route
    history.push('/')
  }

  public isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(String(localStorage.getItem('expires_at')))
    return new Date().getTime() < expiresAt
  }

  public renewToken() {
    this.auth0.checkSession({},
      (err: any, result: any) => {
        if (err) {
          console.error(
            `Could not get a new token (${err.error}: ${err.error_description}).`,
          )
        } else {
          this.setSession(result)
          console.log(`Successfully renewed auth!`)
        }
      },
    )
  }

  public scheduleRenewal() {
    const expiresAt = JSON.parse(String(localStorage.getItem('expires_at')))
    const delay = expiresAt - Date.now()
    if (delay > 0) {
      console.log('scheduled')
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken()
      }, delay)
    }
  }
}
