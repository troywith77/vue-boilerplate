import CustomError from '@@@/utils/CustomError'

// HTTP status code !== 200
export class HttpError extends CustomError {
  constructor(message, props) {
    super(message, props)
    this.name = 'HttpError'
  }
  // http status code
  getStatus() {
    return this.status
  }
}
