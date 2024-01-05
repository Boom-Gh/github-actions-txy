<template>
  <BasicModal v-bind="$attrs" title="Modal Title" :help-message="['提示1', '提示2']" @open-change="handleShow">
    Modal Info.
  </BasicModal>
</template>

<script setup lang="ts">
import { BasicModal } from '@/components/Modal'
const props = defineProps<{
  register?: any
}>()
const open = ref(false)

const handleShow = (open: boolean) => { 
  console.log({open})
}

const handleOk = (e: MouseEvent) => {
  console.log(e)
  open.value = false
}
</script>

<style lang="scss" scoped></style>
