import { App } from 'vue'
import { Button, message } from 'ant-design-vue'
export default (app:App<Element>) => {
  // , size: 'small'
  // https://github.com/unplugin/unplugin-vue-components 自动导入
  app.use(Button)
  app.config.globalProperties.$message = message
}
