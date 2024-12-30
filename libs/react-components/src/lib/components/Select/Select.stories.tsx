import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';
import List from '../List';
import ListItem from '../List-Item';

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

export const Basic: Story = {};

export const ActionElements: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <List 
          activatible={true} 
          rootTabbable={false} 
          multi={false} 
          wrapFocus={false}
          noninteractive={false} 
          itemRoles="listitem" 
          innerAriaLabel="Select List" 
          innerRole="list"
        >
          <ListItem activatible={false}>sub item</ListItem>
          <ListItem activatible={false}>sub item</ListItem>
          <ListItem activatible={false}>sub item</ListItem>
        </List>
      </Select>
    );
  },
};
