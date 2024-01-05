<template>
  <a-breadcrumb class="leading-[64px] ml-4">
    <!-- 面包屑导航对应菜单栏的位置 -->
    <a-breadcrumb-item v-for="(item,index) of $route.matched" :key="item.name" :style="{color: index === $route.matched.length -1 ? token.colorTextDescription : token.colorTextHeading}" @click="handleLink(item)">{{ item.name }}</a-breadcrumb-item>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined />
      </a>
      <!-- <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template> -->
    </a-dropdown>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { RouteLocationMatched, RouteLocation } from 'vue-router'
import { theme } from 'ant-design-vue'
const { useToken } = theme
const { token } = useToken()
const route = useRoute()
const router = useRouter()
// const routes: unknown = router.options.routes;

const levelList = ref<RouteLocationMatched[]>([])
// console.log(route, router, routes);
// const isDashboard = (route)=>{
//   const name = route && route.name
//     if (!name) {
//       return false
//     }
//     return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
// }
const getBreadCrumbs = () => {
  let matched = route.matched.filter((item) => (item.meta && item.meta.title) || item.name)
  // const first = matched[0]
  // let a = 
  // if(!isDashboard(first)){
  //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
  // }

  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}
getBreadCrumbs()


const handleLink = (item: RouteLocationMatched): void => {
  console.log(item)
  
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect as RouteLocation)
  } else {
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
.ant-breadcrumb{

}
</style>
