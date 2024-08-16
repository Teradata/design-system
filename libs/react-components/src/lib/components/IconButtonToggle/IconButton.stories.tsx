import type { Meta, StoryObj } from '@storybook/react';

import IconButtonToggle from './index';

const meta = {
  title: 'Components/IconButtonToggle',
  component: IconButtonToggle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    offIcon: 'home',
    onIcon: 'houseboat',
  },
} satisfies Meta<typeof IconButtonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
