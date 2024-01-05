import Cookies from 'js-cookie'

// 消除魔法字符串，可统一更改
const TokenKey = 'Admin-Token'

export function getToken() {
  // 这里封装的意义是不用知道TokenKey是啥，可直接获取
  return Cookies.get(TokenKey)
}

export function setToken(token: string, options?: Cookies.CookieAttributes | undefined) {
  return Cookies.set(TokenKey, token, options)
}

export function removeToken() {
  // 这里封装removeToken调用是不用知道TokenKey是啥，可直接移除
  return Cookies.remove(TokenKey)
}
