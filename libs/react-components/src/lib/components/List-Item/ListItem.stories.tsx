import type { Meta, StoryObj } from '@storybook/react';
import ListItem from './index';
 

const meta = {
  title: 'Components/List-Item',
  component: ListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  
  args: {
    activatible: true,
    children: <span>List Item</span>,
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return (
      <ListItem {...args}>  
         {args.children}
      </ListItem>
    );
  },
};
 