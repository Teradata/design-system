import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Feedback from './index';

const meta = {
  title: 'Components/Feedback',
  component: Feedback,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    label: 'Did this page help?',
    labelForFeedback: 'Thank you for your feedback!',
    onFeedBack: action('onFeedBack'),
  },
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
