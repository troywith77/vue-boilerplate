export default class UserService {
  static login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'lorem',
        })
      }, 1000)
    })
  }
}
