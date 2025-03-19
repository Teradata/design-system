import type { StorybookConfig } from '@storybook/react-vite';
import { join, resolve } from 'path';
import { terser } from 'rollup-plugin-terser';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  staticDirs: [join(__dirname, './public')],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, '../vite.config.ts'),
      },
    },
  },

  viteFinal: async (config, { configType }) => {
    // Custom Vite configurations can be added here
    if (configType === 'PRODUCTION') {
      config?.plugins?.push(
        terser({
          compress: {
            // Disable name mangling
            keep_classnames: true,
            keep_fnames: true,
          },
          mangle: {
            keep_classnames: true,
            keep_fnames: true,
          },
        }),
      );
    }

    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
