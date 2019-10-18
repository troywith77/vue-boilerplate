export function toUnixTimeStamp(timestamp) {
  if (timestamp === undefined) return timestamp
  return Math.round(timestamp / 1000)
}

export function toJSTimeStamp(timestamp) {
  if (timestamp === undefined) return timestamp
  return timestamp * 1000
}
