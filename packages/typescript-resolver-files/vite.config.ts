import { defineConfig } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/typescript-resolver-files',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    // Process `@graphql-codegen/plugin-helpers` with Vite so it resolves the same `graphql` instance as specs
    server: { deps: { inline: ['@graphql-codegen/plugin-helpers'] } },
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/typescript-resolver-files',
      provider: 'v8',
    },
  },
}));
