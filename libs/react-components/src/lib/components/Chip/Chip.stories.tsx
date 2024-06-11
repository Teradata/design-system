import type { Meta, StoryObj } from '@storybook/react';

import Chip from './index';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: { label: 'Data engineer', selectable: false, selected: false },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
