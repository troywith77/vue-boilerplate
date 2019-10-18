import { toJSTimeStamp } from '@@@/utils/timestamp'

export function exampleTransformer(res) {
  return {
    order: res.order,
    type: res.type,
    updatedAt: toJSTimeStamp(res.updated_at),
    items: (res.items || []).map(item => ({
      createdAt: toJSTimeStamp(item.created_at),
      backgroundColor: item.background_color,
      editorId: item.editor_id,
      editorName: item.editor_name,
      id: item.id,
      jumpUrl: item.jump_url,
      messageId: item.message_id,
      messageTitle: item.message_title,
      subjectId: item.subject_id,
      subjectImage: item.subject_image,
      subjectTitle: item.subject_title,
      subjectType: item.subject_type,
      summary: item.summary,
      timeOrder: item.time_order,
      title: item.title,
    }))
  }
}
