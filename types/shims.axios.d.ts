// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosRequestConfig } from 'axios'
declare module 'axios' {
  
  export interface AxiosRequestConfig {
    /**
     * import type { AxiosRequestConfig } from 'axios'
     * @description 设置为true，则会在请求过程中显示loading动画，直到请求结束才消失
     */
    loading?: boolean;
    withRetry?: boolean;
  }
}
