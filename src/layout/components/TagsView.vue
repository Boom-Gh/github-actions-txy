<template>
  <div class="tag-view-container px-2 py-1">
    <div class="tag-view-scroll">
      <router-link v-for="view of visitedViews" v-slot="{ navigate }" :key="view.path" :to="view" custom>
        <div class="border border-solid mx-1 p-1 inline-block dark:border-stone-400/40" role="link" @click="navigate1">
          {{ view.name }}
          <CloseOutlined class="text-xs p-[4px] hover:bg-slate-200" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTagsViewStore } from '@/store/tagsView'
import { CloseOutlined } from '@ant-design/icons-vue'
import { theme } from 'ant-design-vue'
const { token } = theme.useToken()

const {addView, visitedViews} = useTagsViewStore()
const navigate1 = () => {
  console.log(14)
}
const route = useRoute()
addView({...route})
console.log({...route})

watch(route, (value) => {
  addView({...value})
  console.log(visitedViews)
  
})

const initTags = () => {
    
}
</script>

<style lang="scss" scoped></style>
