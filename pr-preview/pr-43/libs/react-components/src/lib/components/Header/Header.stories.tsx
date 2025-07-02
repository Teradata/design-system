import type { Meta, StoryObj } from '@storybook/react';

import Header from './index';
import Icon from '../Icon';
import Button from '../Button';

const meta = {
  title: 'Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'Developers',
    titleLink: 'https://developers.teradata.com/',
    navItems: [
      {
        href: 'test',
        label: 'Getting started',
      },
      {
        href: 'test',
        label: 'Docs',
        active: true,
        navItems: [
          {
            label: 'VantageCloud Lake Documentation',
            href: 'https://docs.teradata.com/p/VantageCloud/Lake',
          },
          {
            label: 'All Documentation',
            to: '/docs/ai-unlimited',
            active: true,
          },
        ],
      },
      {
        href: 'test',
        label: 'Downloads',
      },
      {
        href: 'test',
        label: 'Community',
        navItems: [
          {
            label: 'Teradata Community',
            href: 'https://support.teradata.com/community',
          },
          {
            label: 'Technical Medium Blogs',
            href: 'https://medium.com/teradata',
            external: true,
          },
          {
            label: 'GitHub',
            href: 'https://github.com/Teradata',
            external: true,
          },
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/teradata',
            external: true,
          },
        ],
      },
    ],
    languages: [
      {
        label: 'Global',
        value: '',
      },
      {
        label: 'France',
        value: 'fr',
      },
    ],
    selectedLanguage: 'fr',
    secondaryMenu: { menuElement: <>Hello world</>, title: 'Demos' },
    headerActions: [
      {
        actionElement: (
          <div>
            <Icon className="fa fa-search" style={{ fontSize: 16 }} />
          </div>
        ),
        type: 'search',
      },
      {
        actionElement: (
          <Button icon="fa fa-home" label="Start free demo" variant={'text'} />
        ),
        type: 'button',
      },
    ],
    announcementContent: (
      <div>
        <Icon className="fa-regular fa-bell" style={{ marginRight: '8px' }} />
        <span>Important Announcement: </span>
        <a
          href="https://www.teradata.com"
          style={{
            marginLeft: '4px',
            color: '#007bff',
            textDecoration: 'underline',
          }}
          target="_blank"
          rel="noreferrer"
        >
          Start free demo
        </a>
      </div>
    ),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
