import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';
import CvListItem from '../CvListItem';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    icon: 'info',
    titleText: 'Select title',
    descriptionText: 'Select description',
    state: 'active',
    inline: false,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <CvListItem>sub item</CvListItem>
        <CvListItem>sub item</CvListItem>
        <CvListItem>sub item</CvListItem>
      </Select>
    );
  },
};
