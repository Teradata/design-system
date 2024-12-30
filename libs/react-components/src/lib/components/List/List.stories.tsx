import type { Meta, StoryObj } from '@storybook/react';
import List from './index';
import CvListItem from '../CvListItem';

const meta = {
  title: 'Components/List',
  component: List,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },

  args: {
    activatible: true,
    rootTabbable: false,
    multi: false,
    wrapFocus: false,
    noninteractive: false,
    itemRoles: '',
    innerAriaLabel: '',
    innerRole: '',
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <CvListItem>sub item</CvListItem>
        <CvListItem>sub item</CvListItem>
        <CvListItem>sub item</CvListItem>
      </List>
    );
  },
};
