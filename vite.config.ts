import path from 'path'
import { defineConfig } from 'vite'
// Vue 3 单文件组件支持：@vitejs/plugin-vue
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' //导入包
// // https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://github.com/jpkleemans/vite-svg-loader // SVG 可以使用后 ?component 缀显式导入为 Vue 组件：
import svgLoader from 'vite-svg-loader'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
// console.log(import.meta.env);
export default defineConfig(({command, mode, ssrBuild}) => {
  console.log(command, mode, ssrBuild)
  return {
    plugins: [
      vue(), 
      svgLoader(),
      eslintPlugin(),
      // 配置vue ref router自动导入
      // eslint-disable-next-line new-cap
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia'
        ]
      }),
      // 配置组件自动按需导入
      // eslint-disable-next-line new-cap
      Components({
        resolvers: [
          // eslint-disable-next-line new-cap
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        // npm install --save-dev @types/node  找不到名称“path __dirname”。ts(2304)
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    server: {
      // 显示ip地址访问
      host: '0.0.0.0',
    },
  }
})
