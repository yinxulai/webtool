export function isDevelop(): boolean {
  return process.env.NODE_ENV !== 'production'
}
