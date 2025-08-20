import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import * as path from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [
    react(),
    dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.json') }),
    peerDepsExternal(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  build: {
    outDir: 'build',
    sourcemap: false,
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      fileName: 'index',
      name: '@supertokens-plugin-user-banning/frontend',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      cache: false,
    },
  },
});
