import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// vite.config.js
import { defineConfig } from 'vite';

  server: {
    proxy: {
      // Proxy API requests to the Node.js server
      '/api': 'http://localhost:5000',  // Proxy all requests to /api to the Node.js backend
    },
  },
});
