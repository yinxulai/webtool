import qs from 'qs'
import { isBrowserEnv } from "../"

export function hrefJump(href: string) {
  if (!isBrowserEnv()) { return }
  const url = decodeURIComponent(href)
  window.location.href = url
}

// TODO:
export function hrefJumpWithToken(href: string, token: string) {
  if (!isBrowserEnv()) { return }
  const url = decodeURIComponent(href)
  window.location.href = `${url}?${qs.stringify({ ...qs.parse(url), token })}`
}


export function openWindow(href: string) {
  if (!isBrowserEnv()) { return }
  const url = decodeURIComponent(href)
  window.open(url, url)
}
