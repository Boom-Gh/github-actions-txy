<template>
  <a-layout class="select-none h-full">
    <a-switch v-model:checked="theme" checked-value="dark" un-checked-value="light" class="absolute right-4 top-6">
      <template #checkedChildren><dayIcon style="width: 12px;height: 12px;vertical-align: -0.11em;" fill="#ffffff" /></template>
      <template #unCheckedChildren><darkIcon style="width: 12px;height: 12px;vertical-align: -0.11em;" fill="#ffd93b" /></template>
    </a-switch>
    <div class="h-full flex justify-center " style="background: url(/src/assets/login/bg.png) no-repeat center center/100% 100%;;">
      <div class="mr-72 max-xl:hidden flex justify-center items-center">
        <component :is="toRaw(eat)" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <favicon class="w-20 h-20" />
        <div class="text-gray-500 my-4 text-3xl font-bold">Vue-antd-admin</div>
        <a-form
          :model="formState"
          name="basic"
          class="w-72"
          :autocomplete="formState.remember ? 'on' : 'off'"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model:value="formState.username">
              <!-- style="color: rgba(0, 0, 0, 0.25)" -->
              <template #prefix><UserOutlined /></template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[{ required: true, message: '请输入账号密码!' }]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix><LockOutlined /></template>
            </a-input-password>
          </a-form-item>

          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          </a-form-item>

          <a-form-item>
            <a-button class="w-full" type="primary" html-type="submit">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </a-layout>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import dayIcon from '@/assets/svg/day.svg?component'
import darkIcon from '@/assets/svg/dark.svg?component'
import eat from '@/assets/login/eat.svg?component'
import favicon from '@/assets/login/favicon.svg?component'
const account = useAccountStore()
const router = useRouter()
const route = useRoute()

import useTheme from '@/hooks/useTheme'
import { useAccountStore } from '@/store/account'
const {theme} = useTheme()
 
const formState = reactive({
  username: '',
  password: '',
  remember: false,
})
const onFinish = (values: unknown) => {
  console.log('Success:', values)
  account.login({ email: formState.username, password: formState.password})
  const redirect = route.query.redirect || '/'
  router.push(redirect as string)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

</script>

<style lang="scss" scoped>
:where(.css-dev-only-do-not-override-13u5ssw).ant-input-affix-wrapper{
  color: rgba(0, 0, 0, 0.25)
}
</style>
