<template>
  <div class="p-6" :style="{ color: token.colorText, background: token.colorBgContainer, 'min-height': 'auto'}">
    <a-switch />
    <a-card
      title="Default size card"
      style="width: 300px"
    >
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <AButton>6546</AButton>
    <div>645646</div>
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :items="items"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
// import { useStore } from '@/store/counter'
// const store = useStore()
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { MenuProps, ItemType, theme } from 'ant-design-vue'
import { VueElement } from 'vue'

const { token } = theme.useToken()
// const route = useRoute()
// console.log(route)

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])

function getItem(
  label: VueElement | string,
  key: string,
  icon?: unknown,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType
}

const items: ItemType[] = reactive([
  getItem('Navigation One', 'sub1', () => h(MailOutlined), [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Navigation Two', 'sub2', () => h(AppstoreOutlined), [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', () => h(SettingOutlined), [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
])

const handleClick: MenuProps['onClick'] = e => {
  console.log('click', e)
}

watch(openKeys, val => {
  console.log('openKeys', val)
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
