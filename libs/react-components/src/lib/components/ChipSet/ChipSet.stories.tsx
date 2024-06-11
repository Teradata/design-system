import type { Meta, StoryObj } from '@storybook/react';

import ChipSet from './index';
import Chip from '../Chip';

const meta = {
  title: 'Components/ChipSet',
  component: ChipSet,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    selectable: true,
    onChipSelect: (_chipsSelected) => {
      // DO SOMETHING
    },
    multiSelect: false,
    defaultSelected: 'Developer',
  },
  render: (args) => (
    <ChipSet {...args}>
      <Chip label="Data engineer" />
      <Chip label="Data analyst" />
      <Chip label="Developer" />
    </ChipSet>
  ),
} satisfies Meta<typeof ChipSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
