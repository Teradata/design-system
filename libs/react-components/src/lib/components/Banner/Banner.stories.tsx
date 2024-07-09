import type { Meta, StoryObj } from '@storybook/react';

import Banner from './index';
import Button from '../Button';

const demoContent = (
  <p>
    There are situations when you want to quickly validate a machine learning
    model idea. You have a model type in mind. You don't want to operationalize
    with an ML pipeline just yet. You just want to test out if the relationship
    you had in mind exists. Also, sometimes even your production deployment
    doesn't require constant relearning with MLops. In such cases, you can use
    Vantage Analytics Library (VAL) and multiple ML model types it supports.
  </p>
);

const meta = {
  title: 'Components/Banner',
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    content: (
      <>
        {demoContent}
        <Button label="Get started" icon="fa fa-arrow-right" trailingIcon />
      </>
    ),
    imageSrc:
      'https://www.teradata.com/getmedia/46d83f57-61b3-43aa-84a4-4cfbd408a1fa/roles-business_leader.svg?origin=fd',
    title: 'Train ML models in Vantage',
    isHero: false,
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Hero: Story = {
  args: {
    title: 'Welcome to the Teradata Developers Portal',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.',
    isHero: true,
    imageSrc: 'https://quickstarts.teradata.com/_/img/possible2024.png',
  },
};
