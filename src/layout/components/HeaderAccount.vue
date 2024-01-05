<template>
  <a-dropdown placement="bottomRight" trigger="click" :arrow="{ pointAtCenter: false }">
    <div class="flex items-center ant-dropdown-link cursor-pointer px-2" @click.prevent>
      <a-avatar class="mr-2">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      admin
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;" @click="handleLogout">
            <LogoutOutlined />
            退出系统
          </a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue'
import { useAccountStore } from '@/store/account'
const account = useAccountStore()
const router = useRouter()
const handleLogout = () => {
  account.logout()
  router.push('/login')
}
</script>1

<style lang="scss" scoped></style>
