// ts扩展全局属性 https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
import dayjs from 'dayjs'
declare module 'vue' {
  interface ComponentCustomProperties {
    // 解决全局vue
    $dayjs: typeof axios
  }
}
