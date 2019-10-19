export default class CustomError extends Error {
  constructor(message, props) {
    super(message)
    Object.entries(props)
      .forEach(([key, value]) => {
        this[key] = value
      })
  }
}
