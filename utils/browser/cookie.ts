import Cookie from 'js-cookie'

export const setCookie = Cookie.set.bind(Cookie)
export const getCookie = Cookie.get.bind(Cookie)
export const removeCookie = Cookie.remove.bind(Cookie)