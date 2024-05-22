/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import path, { extname, relative } from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/libs/react-components',

  plugins: [
    react(),
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: 'dist/libs/react-components',
    reportCompressedSize: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },

    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync(path.resolve(__dirname, 'src/lib/**/*.{ts,tsx}'), {
            ignore: [
              path.resolve(__dirname, 'src/lib/**/*.stories.tsx'),
              path.resolve(__dirname, 'lib/**/*.d.ts'),
            ],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative(
              path.resolve(__dirname, 'src/lib'),
              file.slice(0, file.length - extname(file).length)
            ),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
