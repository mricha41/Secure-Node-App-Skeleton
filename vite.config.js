import path from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  input: path.resolve(import.meta.dirname, '/src/client/components/index/index.ts'),
  build: {
    manifest: true,
    /*rolldownOptions: {
      input: {
        index: path.resolve(import.meta.dirname, '/src/client/components/index/index.ts')
      }
    },*/
    sourcemap: false,
    outDir: path.resolve(import.meta.dirname, '/src/server/dist'),
    emptyOutDir: true
  }
});

