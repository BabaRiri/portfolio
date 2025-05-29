import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: false, // Allow fallback to next available port
    open: true // Auto-open browser on server start
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'animations': ['gsap']
        }
      }
    }
  },
  // Enable Vitest SFC/component testing
  test: {
    environment: 'jsdom',
  }
});
