import type { Meta, StoryObj } from '@storybook/react';

import ListItem from './index';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'List item label',
    content: (
      <>
        <p>Test content of the card</p>
      </>
    ),
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
