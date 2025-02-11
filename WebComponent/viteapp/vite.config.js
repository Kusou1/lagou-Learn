import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        isCustomElement:tag=>tag.startsWith('fc-')
      }
    }
  }),jsx({
    isCustomElement:tag=>tag.startsWith('fc-')
  })]
})
