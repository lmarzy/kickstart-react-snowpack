import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Description } from './description';

export default {
  title: 'Components/DataDisplay/Description',
  component: Description,
} as Meta;

export const Default: Story = ({ data }) => {
  return <Description data={data} />;
};

Default.args = {
  data: [
    { term: 'Long term', description: 'description 1' },
    { term: 'Term', description: 'description 2' },
  ],
};
