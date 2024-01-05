import { defineStore } from 'pinia'
// import { getUserInfo, login } from '@/api/account'
import { LoginParams, login as apiLogin } from '@/api'
import { setToken, removeToken } from '@/utils/auth'

const token = ref('')
export const useAccountStore = defineStore('account', () => {
  const login = async (params: LoginParams) => {
    console.log(params)
    // await apiLogin(params)
    setToken('sfsf')
    token.value = 'sfsf'
  }

  const logout = () => {
    removeToken()
    token.value = ''
    // 这里const router = useRouter() 只能在setup中调用
    // router.push('/login')
  }

  return {
    login,
    logout
  }
})
