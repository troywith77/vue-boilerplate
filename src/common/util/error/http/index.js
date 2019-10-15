// HTTP status code !== 200
export class HttpError extends Error {
  constructor(message, props) {
    super(message)
    this.name = 'HttpError'
    this.props = props
  }
  // http status code
  getStatusCode() {
    return this.props.response.status
  }
}

export class HttpUnknownError extends Error {
  constructor(message) {
    super(message)
    this.name = 'HttpUnknownError'
  }
}
