import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {  // Ensure this starts with a leading slash
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true, // Add this to change the origin of the host header to the target URL
      },
    },
  },
  plugins: [react()],
});
