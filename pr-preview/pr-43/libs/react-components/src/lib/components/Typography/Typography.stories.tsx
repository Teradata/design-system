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
    docs: {
      description: {
        component: `The Typography component provides a consistent and flexible way to display text across your application. 
        It supports a range of predefined styles and customizations, ensuring your text aligns with the design system.
        `,
      },
    },
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
  },
  args: { scale: 'headline1' },
  render: (args) => {
    const element = document.getElementById(
      'story--components-typography--basic--primary-inner',
    );
    element?.style.setProperty(
      '--td-web-typography-eyebrow-alignment',
      'center',
    );
    return <Typography scale={args.scale}>Change the scale value.</Typography>;
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const LeftAlignedEyebrow: Story = {
  parameters: {
    docs: {
      description: {
        story: `The alignment of the eyebrow scale can be customized by modifying 
          the custom CSS property '--td-web-typography-eyebrow-alignment'. 

          This property accepts the following values:

    center: Aligns the eyebrow to the center.
    start: Aligns the eyebrow to the start (left-aligned).
    end: Aligns the eyebrow to the end (right-aligned).

    Here the css property is set as '--td-web-typography-eyebrow-alignment: start;'`,
      },
    },
  },
  render: (_args) => {
    const element = document.getElementById(
      'story--components-typography--left-aligned-eyebrow-inner',
    );
    element?.style.setProperty('--td-web-typography-eyebrow-alignment', 'left');
    return <Typography scale="eyebrow">Left aligned eyebrow</Typography>;
  },
};
