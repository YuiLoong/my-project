import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'  // Firebase에 배포하려면 'build'로 설정
  }
});


// export default defineConfig({
//   plugins: [react()],
// })
