import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send': {
        target: 'http://localhost:3014', // Your Express server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send/, '/send')
      }
    }
  }
});
