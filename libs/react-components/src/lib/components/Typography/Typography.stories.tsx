import type { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    scale: {
      options: [
        'body1',
        'body2',
        'body3',
        'headline1',
        'headline2',
        'headline3',
        'caption',
        'eyebrow',
        'eyebrow2',
      ],
      control: { type: 'select' },
    },
  },
  args: { scale: 'headline1' },
  render: (args) => {
    return <Typography scale={args.scale}>Change the scale value.</Typography>;
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
