export default class User {
  public nickname: string
  public avatar: string
  public jwt: string

  constructor(nickname: string, avatar: string, jwt: string) {
    this.nickname = nickname
    this.avatar = avatar
    this.jwt = jwt
  }
}
