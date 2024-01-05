<template>
  <div class="container">
    <div>
      <MyModal @register="register" />
      <a-button type="primary" @click="showModal">Open Modal</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyModal from './MyModal.vue'
import { useModal } from '@/components/Modal'
const open = ref(false)
const showModal = () => {
  // open.value = true
  openModal()
  console.log(1463)
  
}
// 需求 父组件能打开MyModal组件 并且能控制MyModal组件的显示和隐藏 并且能传入MyModal组件的参数

const [register, { openModal }] = useModal()


</script>

<style lang="scss" scoped></style>
