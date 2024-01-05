import router, {addDynamicRoute } from '@/router'
// import { useUserStore } from '@/store/user'
// import request from '@/api/request'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth'
NProgress.configure({ showSpinner: false }) // 是否显示右上角螺旋加载提示

const whiteList = ['/login'] // 免登录路由白名单
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  
  // set page title
  // document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // router.addRoute({ path: '/about', name: 'about', component: About })
      
      if (!router.hasRoute('about')) {
        addDynamicRoute()
        // 触发重定向，解决刷新时动态路由白屏问题
        next({...to, replace: true})
        return to.fullPath // 返回当前路由，继续下一步路由判断
      }
      next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${ to.path }`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
