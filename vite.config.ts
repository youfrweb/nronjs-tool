/*
 * @Author: youfanrong 737064439@qq.com
 * @Description: 
 * @Date: 2023-11-21 15:13:31
 * @LastEditors: youfanrong 737064439@qq.com
 * @LastEditTime: 2023-11-24 14:21:15
 */
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'tool/index.ts', // 工具库入口
      name: 'zchd-tool', // 工具库名称
      fileName: (format) => `nronjs-tool.${format}.js`, // 工具库名称
    },
  }
})
