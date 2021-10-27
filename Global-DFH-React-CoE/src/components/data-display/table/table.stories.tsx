import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Table } from './table';

export default {
  title: 'Components/DataDisplay/Table',
  component: Table,
} as Meta;

export const Default: Story = ({ headings }) => {
  return (
    <Table headings={headings}>
      <tr>
        <td>One</td>
        <td>Two</td>
      </tr>
      <tr>
        <td>One</td>
        <td>Two</td>
      </tr>
      <tr>
        <td>One</td>
        <td>Two</td>
      </tr>
      <tr>
        <td>One</td>
        <td>Two</td>
      </tr>
    </Table>
  );
};

Default.args = {
  headings: ['Heading 1', 'Heading 2'],
};
