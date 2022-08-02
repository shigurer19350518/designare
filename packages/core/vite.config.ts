import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'publish',
    target: 'esnext',
    lib: {
        entry: resolvePath('src/index.ts'),
        name: 'publish',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
        plugins: [
            peerDepsExternal(),
        ]
    }
}
})
