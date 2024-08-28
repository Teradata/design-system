import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    label: 'Data engineer',
    size: 'medium',
    primary: true,
    icon: 'fa fa-arrow-right',
    trailingIcon: false,
    variant: '',
    slot: '',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
