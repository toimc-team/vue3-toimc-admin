import type { UserConfig, ConfigEnv } from 'vite'

import path from 'path'
// plugins
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import WindiCSS from 'vite-plugin-windicss'

import vueJsx from '@vitejs/plugin-vue-jsx'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// vitejs
import { loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { wrapperEnv } from './build/utils'

import pkg from './package.json'
import dayjs from 'dayjs'
import { createProxy } from './build/proxy'

// 设置应用信息
const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // loadEnv读取的布尔类型是一个字符串。这个函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_HTTPS } = viteEnv

  const isBuild = command === 'build'
  console.log('🚀 ~ file: vite.config.ts ~ line 28 ~ isBuild', isBuild)
  return {
    base: VITE_PUBLIC_PATH,
    root,
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    server: {
      https: VITE_HTTPS,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY)
    },
    plugins: [
      vue(),
      WindiCSS(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
        resolvers: [ElementPlusResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/ // .vue
        ],
        dts: true
      }),
      Components({
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: true
      }),
      vueJsx(),
      Icons({
        autoInstall: true
      }),
      viteMockServe({
        mockPath: './mock',
        supportTs: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    json: {
      stringify: true
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src'),
        types: path.join(__dirname, '/types'),
        dayjs: 'dayjs/esm'
      }
    }
  }
}
