import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'ElementPlus + Nuxt3',
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
  privateRuntimeConfig: {
    API_BASE: "http://localhost:9999",
  },
  css: [
    "assets/scss/index.scss",
    "assets/css/main.css",
  ],
  components: [
    '~/components/',
    // {
    //   path: 'node_modules/element-plus/lib/components/*/index.js',
    // }
  ],
  vite: {
    logLevel: "info",
    server:{
      proxy:{
        "/api":{
          target:"http://localhost:9999",
          changeOrigin: true,
        }
      }
    }
  },
})
