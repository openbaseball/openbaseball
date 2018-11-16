import auth0, { Auth0DecodedHash } from 'auth0-js'
import User from '../modules/auth/user'
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
  public tokenRenewalTimeout: any
  public auth0 = new auth0.WebAuth(options)

  public login() {
    this.auth0.authorize()
  }

  public handleAuthentication(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log('success')
          this.setSession(authResult)
          resolve()
        } else if (err) {
          console.log('fail')
          console.log(err)
          console.log(`Error: ${err.error}. Check the console for further details.`)
          reject(err)
        }
      })
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

  public getProfile(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const accessToken = this.getAccessToken()
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          const user = new User(profile.nickname, profile.picture)
          resolve(user)
        } else {
          reject(err)
        }
      })
    })
  }

  public logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('scopes')
    clearTimeout(this.tokenRenewalTimeout)
    // navigate to the home route
    history.push('/')
  }

  public isAuthenticated(): boolean {
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
