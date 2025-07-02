import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Card title',
    content: <p>Test content of the card</p>,
    imageSrc:
      'https://marvel-b1-cdn.bc0a.com/f00000000151999/www.teradata.com/getmedia/fee7f169-ae6a-4a8c-8b6a-2d88931e2ed1/og_image-possible_2024.jpg?origin=fd',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
