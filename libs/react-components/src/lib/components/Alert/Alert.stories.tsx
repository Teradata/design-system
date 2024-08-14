import type { Meta, StoryObj } from '@storybook/react';

import Alert from './index';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
    args: {
      text1: 'Translations are provided by machine translation. In the event of any discrepancy, inconsistency or inconsistency between the translation provided and the English version, the English version shall prevail.',
      label: 'Learn more',
      header:'Machine assisted translation',
      text2:'Machine-assisted translations of any material into languages ​​other than English are intended solely for the convenience of users who do not read English and are not legally binding. Any person relying on such information does so at his or her own risk. No automated translation is perfect or intended to replace human translators. Teradata makes no promises or warranties as to the accuracy of the machine-assisted translations provided. Teradata accepts no responsibility and will not be liable for any damages or problems that may result from the use of such translations. Users are reminded to use the content in English.'
    },
  } satisfies Meta<typeof Alert>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Basic: Story = {};