<template>
  <!-- a-layout-sider主动声明theme="light"暗黑才生效 -->
  <!-- breakpoint="xs" collapsed-width="0" -->
  <div class="h-8 m-4 flex justify-between items-center overflow-hidden">
    <img src="/favicon.svg" class="side-logo shrink-0" alt="logo">
    <span v-show="!collapsed" class="sidebar-title flex-1 font-bold text-lg" :style="{color: token.colorTextHeading }">VueAntdAdmin</span>
  </div>
  <a-menu v-model:selectedKeys="selectedKeys" class="select-none" :theme="(themeData as MenuTheme)" :style="{height: 'calc(100% - 64px)', background: token.colorBgContainer}">
    <a-menu-item v-for="menu of menuList" :key="menu.path">
      <component :is="map[menu.meta.icon as Imap]" />
      <span><RouterLink :to="menu.path">{{ menu.name }}</RouterLink></span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import useTheme from '@/hooks/useTheme'
import { theme, MenuTheme } from 'ant-design-vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
defineProps<{
  collapsed: boolean
}>()


const { token } = theme.useToken()
const route = useRoute()

const selectedKeys = ref<string[]>([])
watchEffect(() => {
  selectedKeys.value = [route.path]
})

const {theme: themeData} = useTheme()

const map = {
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined
}
type Imap = keyof typeof map
const menuList = ref([
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      icon: 'VideoCameraOutlined',
      title: '数据看板'
    }
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      icon: 'UploadOutlined',
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      icon: 'UserOutlined',
      title: '关于'
    }
  },
  {
    path: '/modal',
    name: 'modal',
    meta: {
      icon: 'UserOutlined',
      title: '关于'
    }
  },
  {
    path: '/stytem/role',
    name: 'role',
    meta: {
      icon: 'UserOutlined',
      title: '关于'
    }
  },
])
</script>

<style lang="scss" scoped></style>
