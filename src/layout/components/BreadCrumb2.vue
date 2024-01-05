<template>
  <a-breadcrumb :routes="routes" class="ml-4 py-[16px]">
    <template #itemRender="{ route, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1" :style="{ color: token.colorTextDescription}">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`${basePath}/${paths.join('/')}`" :style="{ color: token.colorTextHeading}">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { RouteLocationMatched, RouteLocation } from 'vue-router'
import { theme } from 'ant-design-vue'
import { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb'
const { useToken } = theme
const { token } = useToken()
const router = useRouter()
// const route = useRoute()

console.log( router)

// 通过当前的路由名称，找出面包屑导航


const handleLink = (item: RouteLocationMatched): void => {
  console.log(item)
  
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect as RouteLocation)
  } else {
    router.push(path)
  }
}

// 把当前页面的路由，整成下面的结构展示


const basePath = ''
const routes = ref<Route[]>([
  {
    path: '/',
    breadcrumbName: 'first',
    children: [
      {
        path: '/dashboard',
        breadcrumbName: 'dashboard',
      },
      {
        path: '/index',
        breadcrumbName: 'index',
      },
      {
        path: '/about',
        breadcrumbName: 'about',
      },
    ],
  },
  {
    path: '/login',
    breadcrumbName: 'login',
  },
])
</script>

<style lang="scss" scoped>

</style>
