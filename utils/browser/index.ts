import { isBrowserEnv } from "../"

export function tryCall(name: string, ...args: any[]) {
  if (!isBrowserEnv()) { return }
  const fn = window[name as any] as any
  if (typeof fn === 'function') { fn(...args) }
}
