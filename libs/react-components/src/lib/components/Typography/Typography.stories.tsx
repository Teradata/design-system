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
      ],
      control: { type: 'select' },
    },
    alignment: {
      options: ['center', 'left', 'right'],   
      control: { type: 'select' },    
      if: { arg: 'scale', eq: 'eyebrow' },
    },
  },
  args: { scale: 'headline1', alignment: 'center' },
  render: (args) => {
    return <Typography scale={args.scale} alignment={args.alignment}>Change the scale value.</Typography>;
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
