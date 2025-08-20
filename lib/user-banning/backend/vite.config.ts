import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import * as path from 'path';
import { resolve } from 'path';

export default defineConfig(() => {
  console.log('========== PACKAGE.JSON ========');
  console.log(resolve(__dirname, '../../../package.json'));
  return {
    root: __dirname,
    plugins: [dts({ include: ['src/**/*'], tsconfigPath: path.join(__dirname, 'tsconfig.json') }), peerDepsExternal()],

    optimizeDeps: {
      force: true,
    },
    resolve: {
      preserveSymlinks: true,
    },

    build: {
      minify: false,
      outDir: 'build',
      sourcemap: true,
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@supertokens-plugin-user-banning/backend',
        fileName: 'index',
        // Change this to the formats you want to support.
        // Don't forget to update your package.json as well.
        formats: ['es' as const],
      },
      rollupOptions: {
        cache: false,
      },
    },
  };
});
