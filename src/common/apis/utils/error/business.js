import CustomError from '@@@/utils/CustomError'

// 业务 error | code !== 20000
export class BusinessError extends CustomError {
  constructor(message, props) {
    super(message, props)
    this.name = 'BusinessError'
  }
}
