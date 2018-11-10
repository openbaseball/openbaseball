import auth0, { Auth0DecodedHash } from 'auth0-js'
import { history } from '../store'

const currentHost = window.location.href.split('/').slice(0, 3).join('/')
const options = {
  // TODO: move ids outside
  clientID: 'O3IQP0KYJKdlOxelt1duBEI35PiKiTOm',
  domain: 'openbaseballorg.auth0.com',
  redirectUri: `${currentHost}/callback`,
  responseType: 'token id_token',
  scope: 'openid',
}

export default class Auth {
  public auth0 = new auth0.WebAuth(options)

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
      }
    })
  }

  public setSession(authResult: Auth0DecodedHash) {
    if (authResult.expiresIn && authResult.accessToken && authResult.idToken) {
      // Set the time that the Access Token will expire at
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)
      // navigate to the home route
      history.push('/')
    }
  }

  public logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    history.push('/')
  }

  public isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(String(localStorage.getItem('expires_at')))
    return new Date().getTime() < expiresAt
  }
}