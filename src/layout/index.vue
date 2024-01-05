<template>
  <a-layout class="h-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" theme="light">
      <SideMenu :collapsed="collapsed" />
    </a-layout-sider>
    
    <a-layout class="overflow-y-auto" @scroll="onScroll">
      <a-layout-header class="select-none" :class="{'shadow-lg': isFixedHeader}" :style="{padding: 0, height: 'auto', 'line-height': 1, background: token.colorBgContainer}">
        <div class="flex justify-between shadow-sm">
          <div class="flex">
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            <BreadCrumb />
          </div>
          <div class="flex items-center pr-3 leading-[54px]" :style="{ '--colorBgTextHover': token.colorBgTextHover}">
            <!-- 主图切换 -->
            <ThemeSwitch class="mr-2" />
            <!-- header 消息通知 -->
            <HeaderNotification />
            <!-- header 用户账号 -->
            <HeaderAccount />
          </div>
        </div>
        <TagsView></TagsView>
      </a-layout-header>

      
      <!-- <RouterView /> -->
      <!-- :style="{ color: token.colorText, background: token.colorBgContainer, 'min-height': 'auto'}" -->
      <a-layout-content class="mx-4 my-4" :style="{ color: token.colorText, 'min-height': 'auto'}">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import BreadCrumb from '@/layout/components/BreadCrumb2.vue'
import { theme } from 'ant-design-vue'

import SideMenu from '@/layout/components/SideMenu.vue'
import HeaderNotification from '@/layout/components/HeaderNotification.vue'
import HeaderAccount from '@/layout/components/HeaderAccount.vue'
import TagsView from '@/layout/components/TagsView.vue'
// useAccountStore 只能在setup函数内使用

const selectedKeys = ref<string[]>(['/index'])
const collapsed = ref<boolean>(false)

const route = useRoute()

// 设置active menu
watchEffect(() => {
  selectedKeys.value = [route.path]
})

const { token } = theme.useToken()


const isFixedHeader = ref<boolean>(false)
const onScroll = (e: Event) => {
  isFixedHeader.value = (e.target as HTMLElement).scrollTop > 10
}
</script>

<style lang="scss">
.ant-dropdown-link{
  &:hover{
    background: var(--colorBgTextHover);
  }
}
.side-logo{
  transition: 0.25s;
}
.ant-layout-sider-collapsed{
  .side-logo{
    padding-left: 8px;
  }
}
.ant-layout-header{
  position: sticky;
  top: 0;
  z-index: 10;
}
.fixed-shadow{
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
