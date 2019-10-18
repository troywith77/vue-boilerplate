export default class Example {
  constructor(d) {
    this.createdAt = d.createdAt
    this.backgroundColor = d.backgroundColor
    this.editorId = d.editorId
    this.editorName = d.editorName
    this.id = d.id
    this.jumpUrl = d.jumpUrl
    this.messageId = d.messageId
    this.messageTitle = d.messageTitle
    this.subjectId = d.subjectId
    this.subjectImage = d.subjectImage
    this.subjectTitle = d.subjectTitle
    this.subjectType = d.subjectType
    this.summary = d.summary
    this.timeOrder = d.timeOrder
    this.title = d.title
  }
  get hexBackgroundColor() {
    return this.backgroundColor === 1 ? 'red' : 'green'
  }
}
