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

// 业务 error | code !== 20000
export class ApiError extends Error {
  constructor(message, props) {
    super(message)
    this.name = 'ApiError'
    this.props = props
  }
  // business error code
  getCode() {
    return this.props.code
  }
}
