<template>
  <a-config-provider
    :theme="{
      algorithm: themeData === 'dark' ? darkAlgorithm : defaultAlgorithm,
    }"
    :locale="locale"
  >
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import useTheme from '@/hooks/useTheme'
import { theme } from 'ant-design-vue'

dayjs.locale('zh-cn')

// 主题切换
const { darkAlgorithm, defaultAlgorithm } = theme
const {theme: themeData} = useTheme()

const locale = ref(zhCN) 
const a = 6546465

const b = 5
// const { token } = useToken();
//     console.log(token);
//     Object.keys(token.value).forEach(key=>{
//       document.documentElement.style.setProperty(`--${key}`, token.value[key]);
//     })

</script>

<style scoped>
</style>
