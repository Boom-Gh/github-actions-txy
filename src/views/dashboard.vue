<template>
  <div>
    <a-button>Button</a-button>
    <!-- rgba(0, 0, 0, 0.06) -->
    <div :class="`bg-[rgba(80,215,30,0.06)] dark:bg-gray-400` ">测试tailwindcss 暗黑主题切换</div>
    <SvgIcon name="back_top" color="red"></SvgIcon>
    <SvgIcon name="calendar"></SvgIcon>
    {{ token.colorText }}
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { theme } from 'ant-design-vue'
const { token } = theme.useToken()
// const cns = getCurrentInstance()
// cns!.appContext.config.globalProperties.$token = token
const a = 1
</script>

<style lang="scss" scoped>
</style>
