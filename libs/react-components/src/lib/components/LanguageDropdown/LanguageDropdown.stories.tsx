import type { Meta, StoryObj } from '@storybook/react';

import LanguageDropdown from './index';

const languages = [
  {
    label: 'Global',
    value: '',
  },
  {
    label: 'France',
    value: 'fr',
  },
];

const meta = {
  title: 'Components/LanguageDropdown',
  component: LanguageDropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    languages,
    selectedLanguage: 'fr',
  },
} satisfies Meta<typeof LanguageDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
