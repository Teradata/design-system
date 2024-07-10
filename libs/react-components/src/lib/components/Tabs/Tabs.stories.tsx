import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabBar } from './index';
import Banner from '../Banner';

const demoContent = (
  <>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </>
);

const meta = {
  title: 'Components/Tabs',
  component: TabBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    defaultSelectedIndex: 0,
    children: [
      <Tab key="tab1" label="Tab 1">
        <Banner
          content={
            <>
              <p>{demoContent}</p>
              <p>{demoContent}</p>
            </>
          }
          imageSrc={
            'https://www.teradata.com/getmedia/46d83f57-61b3-43aa-84a4-4cfbd408a1fa/roles-business_leader.svg?origin=fd'
          }
          title="This is a demo title"
        />
      </Tab>,
      <Tab key="tab2" label="Tab 2">
        <Banner
          content={<p>{demoContent}</p>}
          imageSrc={
            'https://www.teradata.com/getmedia/b6c99212-cd32-42ec-beec-a12436b0296a/roles-data_leader.svg?origin=fd'
          }
          title="This is another demo title"
        />
      </Tab>,
      <Tab key="tab3" label="Tab 3">
        <Banner
          content={<p>{demoContent}</p>}
          imageSrc={
            'https://www.teradata.com/getmedia/b6c99212-cd32-42ec-beec-a12436b0296a/roles-data_leader.svg?origin=fd'
          }
          title="This is another demo title tab 3"
        />
      </Tab>,
      <Tab key="tab4" label="Tab 4">
        <Banner
          content={<p>{demoContent}</p>}
          imageSrc={
            'https://www.teradata.com/getmedia/b6c99212-cd32-42ec-beec-a12436b0296a/roles-data_leader.svg?origin=fd'
          }
          title="This is another demo title tab 4"
        />
      </Tab>,
    ],
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
