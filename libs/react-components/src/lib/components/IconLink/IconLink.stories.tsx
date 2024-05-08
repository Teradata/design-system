import type { Meta, StoryObj } from '@storybook/react';

import IconLink from './index';

const meta = {
  title: 'Components/IconLink',
  component: IconLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    iconName: 'fa fa-home',
    label: 'LinkedIn',
    color: '#fff',
    size: 16,
    href: 'https://www.linkedin.com/company/teradata',
  },
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
