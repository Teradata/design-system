import type { Preview } from '@storybook/react';

import '../src/lib/styles.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
