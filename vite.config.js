import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"
import purgecss from 'vite-plugin-purgecss';
import { visualizer } from 'rollup-plugin-visualizer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build:{
    target: 'esnext',
  }
})
