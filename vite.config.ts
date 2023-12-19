import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        popup: 'src/pages/popup/index.tsx',
        popupHTML: 'src/pages/popup/Popup.html',
      },
      output: {
        entryFileNames: 'src/pages/popup/popup.js',
      },
    },
  },
});
