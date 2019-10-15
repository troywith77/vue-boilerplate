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
