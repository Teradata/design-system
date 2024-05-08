import type { Meta, StoryObj } from '@storybook/react';

import Footer from './index';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    links: [
      {
        title: 'How we help',
        items: [
          {
            label: 'Roles',
            href: 'https://www.teradata.com/how-we-help',
          },
          {
            label: 'Industries',
            href: 'https://www.teradata.com/industries',
          },
          {
            label: 'Partners',
            href: 'https://www.teradata.com/partners',
          },
          {
            label: 'Partner registration',
            external: true,
            href: 'https://www.teradata.com/getattachment/49d347ac-d544-4a6c-9db3-27c9cd2d5afd/new-user-registration-instructions-for-td-partner-community.pdf?lang=en-us',
          },
          {
            label: 'Partner portal login',
            external: true,
            href: 'https://teradata.my.site.com/teradataPRM/s/login/',
          },
          {
            label: 'Success stories',
            href: 'https://www.teradata.com/customers',
          },
        ],
      },
      {
        title: 'Our platform',
        items: [
          {
            label: 'Platform',
            href: 'https://www.teradata.com/platform',
          },
          {
            label: 'VantageCloud',
            href: 'https://www.teradata.com/platform/vantagecloud',
          },
          {
            label: 'ClearScape Analytics',
            href: 'https://www.teradata.com/platform/clearscape-analytics',
          },
          {
            label: 'Unleash AI Innovation',
            href: 'https://www.teradata.com/platform/ai-ml',
          },
          {
            label: 'Workloads',
            href: 'https://www.teradata.com/platform/workloads',
          },
          {
            label: 'Deployment',
            href: 'https://www.teradata.com/platform/deployment',
          },
        ],
      },
      {
        title: 'Getting started',
        items: [
          {
            label: 'Pricing',
            href: 'https://www.teradata.com/getting-started/pricing',
          },
          {
            label: 'Demos',
            href: 'https://www.teradata.com/getting-started/demos',
          },
          {
            label: 'Modernization workshop',
            href: 'https://www.teradata.com/getting-started/modernization-workshop',
          },
          {
            label: 'Executive Briefing Center',
            href: 'https://www.teradata.com/getting-started/executive-briefing-center',
          },
          {
            label: 'Events',
            href: 'https://www.teradata.com/events',
          },
          {
            label: 'Learning',
            href: 'https://www.teradata.com/university',
          },
        ],
      },
      {
        title: 'Insights',
        items: [
          {
            label: 'AI/ML',
            href: 'https://www.teradata.com/insights/ai-and-machine-learning',
          },
          {
            label: 'Cloud data analytics',
            href: 'https://www.teradata.com/insights/cloud-data-analytics',
          },
          {
            label: 'Data architecture',
            href: 'https://www.teradata.com/insights/data-architecture',
          },
          {
            label: 'Data platform',
            href: 'https://www.teradata.com/insights/data-platform',
          },
          {
            label: 'Data security',
            href: 'https://www.teradata.com/insights/data-security',
          },
          {
            label: 'Glossary',
            href: 'https://www.teradata.com/glossary',
          },
        ],
      },
      {
        title: 'About us',
        items: [
          {
            label: 'Who we are',
            href: 'https://www.teradata.com/about-us',
          },
          {
            label: 'Our leadership',
            href: 'https://www.teradata.com/about-us/leadership',
          },
          {
            label: 'Newsroom',
            href: 'https://www.teradata.com/newsroom',
          },
          {
            label: 'Careers',
            external: true,
            href: 'https://careers.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
          },
          {
            label: 'Investors',
            external: true,
            href: 'https://investor.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
          },
        ],
      },
    ],
    socialLinks: {
      title: 'Social media',
      items: [
        {
          icon: 'fa-brands fa-linkedin-in',
          href: 'https://www.linkedin.com/company/teradata',
        },
        {
          icon: 'fa-brands fa-x-twitter',
          href: 'https://twitter.com/teradata',
        },
        {
          icon: 'fa-brands fa-facebook-f',
          href: 'https://www.facebook.com/Teradata',
        },
        {
          icon: 'fa-brands fa-instagram',
          href: 'https://www.instagram.com/teradata/',
        },
        {
          icon: 'fa-brands fa-youtube',
          href: 'https://www.youtube.com/user/teradata',
        },
        {
          icon: 'fa fa-rss',
          href: 'https://www.teradata.com/rss',
        },
      ],
    },
    legalLinks: [
      {
        label: 'Privacy',
        href: 'https://www.teradata.com/privacy',
      },
      {
        label: 'Don’t Sell/Share My Info',
        href: 'https://www.teradata.com/privacy#do-not-sell-share',
      },
      {
        label: 'Terms of use',
        href: 'https://www.teradata.com/legal/terms-of-use',
      },
      {
        label: 'Legal',
        href: 'https://www.teradata.com/legal/legal-notice',
      },
      {
        label: 'Support Policies',
        href: 'https://www.teradata.com/product-support-policy',
      },
      {
        label: 'Tracking Consent',
        href: 'https://www.teradata.com/how-we-help#tracking-consent',
      },
    ],
    copyright: '2024 Teradata. All Rights Reserved',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
