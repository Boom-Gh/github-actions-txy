type theme = 'light' | 'dark'

const LOCAL_KEY = '__theme__'
const theme = ref<theme>(localStorage.getItem(LOCAL_KEY) as theme || 'light')

// 主题跟随系统
const match = matchMedia('(prefers-color-scheme: dark)')
function followSystem () {
  if (match.matches) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}

// 如果系统是dark模式，切换dark模式设置为跟随系统，如果设置为light，这移除事件监听
watchEffect(() => {
  localStorage.setItem(LOCAL_KEY, theme.value)
  document.documentElement.dataset.theme = theme.value
  if ((match.matches && theme.value === 'dark') || (!match.matches && theme.value === 'light')) {
    match.addEventListener('change', followSystem)
  } else {
    match.removeEventListener('change', followSystem)
  }
})
export default function useTheme() {
  return { theme}
}
