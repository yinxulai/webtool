// 是服务端 node
export function isNodeEnv(): boolean {
  return typeof global !== 'undefined'
}

// 是浏览器端
export function isBrowserEnv(): boolean {
  return typeof window !== 'undefined'
}
