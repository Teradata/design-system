import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './index';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: [
      {
        label: 'Home',
        link: '#',
      },
      {
        label: 'Our platform',
        link: '#',
      },
      {
        label: 'Breadcrumb item 3',
        link: '#',
      },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
