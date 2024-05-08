import type { Meta, StoryObj } from '@storybook/react';

import CodeSnippet from './index';

const sqlContent = `
SELECT * FROM load_to_teradata (
    ON (
    SELECT "class" AS class_col,
            "variable" AS variable_col,
            "type" AS type_col,
            category,
            cnt,
            "sum" AS sum_col,
            "sumSq",
            "totalCnt"
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`;

const meta = {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    hideHeader: false,
    inline: false,
    language: 'sql',
    label: 'Example.sql',
    content: sqlContent,
  },
} satisfies Meta<typeof CodeSnippet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
