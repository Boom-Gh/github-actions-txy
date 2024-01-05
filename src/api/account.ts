import http from '@/api/request'
// import type { AxiosResponse } from 'axios'
import { LoginParams, LoginResData, registerData, Result } from '@/api'


export function login( data:LoginParams ): Promise<Result<LoginResData>> {
  return http.post('/user/login', data, { withRetry: true })
}

export function registerAccount(data: registerData) {
  return http.post('/users/', data)
}

export interface UserInfoResData {
  _id: string
  email: string
  nickName: string
  description: string
  avatar: string
  column: string
  createdAt: string
}

export function getUserInfo(): Promise<Result<UserInfoResData>> {
  return http.get('/user/current')
}
