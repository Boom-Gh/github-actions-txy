import axios from 'axios'
import router from '@/router/index'
import { filterEmptyFields } from '@/utils/index'
/**
 * 1.空参数过滤
 * 2.code !== 1 reject
 * 3.interceptors.response errorCode 处理函数
 * 4.interceptors.request baseURL设置、token设置
 * 5.超时请求 return axios.request(originalRequest)
 * const mode = import.meta.env.MODE // --mode production  --mode development
 */
const message = console

// 创建axios实例 81B052E3D2228A57 http://apis.imooc.com/api/user/login?icode=81B052E3D2228A57
// baseURL: 'http://apis.imooc.com/api/'
const { PROD, VITE_BASE_URL, VITE_API_PREFIX } = import.meta.env
const instance = axios.create({ timeout: 1000 * 12, baseURL: PROD ? VITE_BASE_URL : VITE_API_PREFIX })
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么 
    // 去除空参数和多余的空格
    if (config.params) config.params = filterEmptyFields(config.params)
    if (config.data) config.data = filterEmptyFields(config.data)
    // shims.axios.d.ts 解决类型“InternalAxiosRequestConfig<any>”上不存在属性“loading”。
    config.loading = true
    // get 请求，添加到 url 中
    config.params = { ...config.params, icode: '81B052E3D2228A57' }
    // 其他请求，添加到 body 中
    // 如果是上传文件，添加到 FormData 中
    if (config.data instanceof FormData) {
      config.data.append('icode', '81B052E3D2228A57')
    } else {
      // 普通的 body 对象，添加到 data 中
      config.data = { ...config.data, icode: '81B052E3D2228A57' }
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // status >= 200 && status < 300 时进入该函数
    if (response.data.code === 0) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 请求已发出，但是不在2xx的范围
    const { response } = error
    const originalRequest = error.config
    if (error.config.withRetry) {
      // 请求错误重发
      return axios.request(originalRequest)
    }
    if ( error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 ) {
      message.error({ showClose: true, message: '请求超时，请稍后重试！', duration: 3000 })
      // originalRequest._retry = true  不知道这个是干什么吃的
      return Promise.reject(response)
    }
    errorHandle(response.status, response.data.message)
    return Promise.reject(response)
  }
)

/**
 * 请求失败后的错误统一处理
 * @param { Number } status 请求失败的状态码
 */
const errorHandle = (status: number, other: string) => {
  // 状态码判断
  switch (status) {
    case 400:
      message.error({ showClose: true, message: '请求参数有误！', duration: 3000 })
      break
    // 401: 未登录状态，跳转登录页
    case 401:
      // message.error({showClose: true, message: "session过期，即将前往登录页面！", duration: 3000});
      message.error({
        showClose: true,
        message: message,
        duration: 3000,
        onClose: function () {
          router.replace({
            path: '/signin',
            query: { redirect: router.currentRoute.value.fullPath },
          })
        },
      })
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      message.error({ showClose: true, message: '没有操作权限！', duration: 3000 })
      break
    // 404请求不存在
    case 404:
      message.error({ showClose: true, message: '请求不存在', duration: 3000 })
      break
    case 500:
      message.error({ showClose: true, message: '请求失败，服务器内部错误', duration: 3000 })
      break
    case 504:
      message.error({ showClose: true, message: '与服务器连接失败！', duration: 3000 })
      break
    default:
      console.log(other)
  }
}

export default instance
