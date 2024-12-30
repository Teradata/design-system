import type { Meta, StoryObj } from '@storybook/react';
import CvListItem from './index';

const meta = {
  title: 'Components/CvListItem',
  component: CvListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },

  args: {
    /**
     * Value associated with this list item
     */
    value: '',
    /**
     * Used to group items together
     */
    group: '',
    /**
     * Reflects tabindex and sets internal tab indices.
     */
    tabindex: 1,
    /**
     * Reflects disabled and sets internal disabled attributes.
     */
    disabled: false,
    /**
     * Activates the two-line variant and enables the secondary slot.
     */
    twoline: false,
    /**
     * Activates focus-persistent ripple.
     */
    activated: false,
    /**
     * Determines which graphic layout to show and enables the graphic slot.
     */
    graphic: '',
    /**
     * Allows arbitrary width for multiple slotted graphics.
     */
    multipleGraphics: false,
    /**
     * Activates the meta layout tile and enables the meta slot.
     */
    hasMeta: false,
    /**
     * Disables focus and pointer events for the list item.
     */
    noninteractive: false,
    /**
     * Denotes that the list item is selected.
     */
    selected: false,
    /**
     * Content to be rendered in the list item.
     */
    children: <span>List Item</span>,
  },
} satisfies Meta<typeof CvListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return <CvListItem {...args}>{args.children}</CvListItem>;
  },
};
