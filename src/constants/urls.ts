export default class Urls {
  // User urls
  static login: string = '/user/login'
  static register: string = '/user/signup'
  static userData: string = '/user/userData'
  static refreshToken: string = '/user/refreshToken'
  static resetPassword: string = '/user/resetPassword'
  static socialRegister: string = '/user/socialRegister'
  static googleApi: string = 'https://www.googleapis.com/oauth2/v1/userinfo'

  // Product urls
  static products: string = '/products'
  static genders: string = '/products/genders'
  static categorys: string = '/products/categorys'
}
