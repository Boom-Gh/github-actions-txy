<template>
  <a-modal title="Basic Modal" v-bind="getBindValue" @cancel="handleCancel"></a-modal>
</template>

<script setup lang="ts">
import { isFunction } from '@/utils'

const props = defineProps<{
  closeFunc?:() => boolean
}>()
const emit = defineEmits(['register', 'cancel', 'open-change'])
const propsRef = ref<any>(null)
const openRef = ref(false)
const attrs = useAttrs()

watch(propsRef, (val) => {
  emit('open-change', val)
})

const getBindValue = computed(() => {
  const attr = {
    ...attrs,
    open: unref(openRef),
  }
  return attr
})


const modalMethods = {
  setModalProps,
  emitOpen: undefined,
  redoModalHeight: () => {
    // nextTick(() => {
    //   if (unref(modalWrapperRef)) {
    //     (unref(modalWrapperRef) as any).setModalHeight()
    //   }
    // })
  },
}

function setModalProps(props:any): void {
  // Keep the last setModalProps
  // console.log(props.open())
  
  propsRef.value = Object.assign({}, unref(propsRef) || ({} as any), props)
  if (Reflect.has(props, 'open')) {
    openRef.value = !!props.open
  }

}

// 取消事件
async function handleCancel(e: Event) {
  e?.stopPropagation()
  // 过滤自定义关闭按钮的空白区域
  if (props.closeFunc && isFunction(props.closeFunc)) {
    const isClose: boolean = await props.closeFunc()
    openRef.value = !isClose
    return
  }

  openRef.value = false
  emit('cancel', e)
}

const instance = getCurrentInstance()
if (instance) {
  emit('register', modalMethods, instance.uid)
}

</script>

<style lang="scss" scoped></style>
