import type { Meta, StoryObj } from '@storybook/react';
import Alert from './index';
import IconButton from '../IconButton';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    icon: 'info',
    titleText: 'Alert title',
    descriptionText: 'Alert description',
    state: 'active',
    inline: false,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const ActionElements: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <IconButton slot="action-items" icon="close" />
      </Alert>
    );
  },
};
