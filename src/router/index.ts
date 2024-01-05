
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard.vue')
const index = () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue')
const layout = () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue')
const about = () => import(/* webpackChunkName: "about" */ '@/views/about/about.vue')
const login = () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
const modal = () => import(/* webpackChunkName: "modal" */ '@/views/modal/modal.vue')
const role = () => import(/* webpackChunkName: "modal" */ '@/views/system/role.vue')

const routerMap = {
  about
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    meta: {
      title: '首页',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: 'index',
        name: 'index',
        component: index
      },
      {
        path: '/modal',
        name: 'modal',
        component: modal
      },
      {
        path: '/stytem/role',
        name: 'role',
        component: role
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

export function addDynamicRoute () {
  router.addRoute('layout', { path: '/about', name: 'about', component: routerMap.about })
}
// meta: {
//   title:string; 页面标题，通常必选。
//   icon?:string; 图标，一般配合菜单使用。
//   auth?:boolean; 是否需要登录权限。
//   ignoreAuth?:boolean; 是否忽略权限。
//   roles?:RoleEnum[]; 可以访问的角色
//   keepAlive?:boolean; 是否开启页面缓存
//   hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
//   order?:number; 菜单排序。
//   frameUrl?:string; 嵌套外链。
// }
