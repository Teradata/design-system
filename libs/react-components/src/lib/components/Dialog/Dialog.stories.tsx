import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './index';
import Button from '../Button';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    open: true,
    hideActions: false,
    stacked: false,
    heading: 'Sample dialog title',
    scrimClickAction: '',
    escapeKeyAction: '',
    defaultAction: 'close',
    actionAttribute: 'dialogAction',
    initialFocusAttribute: 'dialogInitialFocus',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return (
      <Dialog {...args}>
        <div>Sample dialog content</div>
        <div slot="secondaryAction">
          <Button label="Cancel" primary={false} slot="secondaryAction" />
        </div>
        <div slot="primaryAction">
          <Button label="Close" primary={true} slot="primaryAction" />
        </div>
      </Dialog>
    );
  },
};
