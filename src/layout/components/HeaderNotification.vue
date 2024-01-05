<template>
  <a-dropdown placement="bottom" trigger="click" arrow>
    <div class="ant-dropdown-link cursor-pointer px-2 mr-2" @click.prevent>
      <a-badge count="5">
        <BellOutlined style="font-size: 20px;" />
      </a-badge>
    </div>
    <template #overlay>
      <a-menu>
        <a-tabs v-model:activeKey="activeKey" class="px-4 pb-4">
          <a-tab-pane key="1" tab="通知(5)">Content of Tab Pane 1</a-tab-pane>
          <a-tab-pane key="2" tab="消息(6)" force-render>Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="代办(7)">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue'
const activeKey = ref('1')
</script>

<style lang="scss" scoped></style>
