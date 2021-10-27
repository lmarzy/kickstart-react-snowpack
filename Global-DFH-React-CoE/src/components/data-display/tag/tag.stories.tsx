import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tag } from './tag';

export default {
  title: 'Components/DataDisplay/Tag',
  component: Tag,
} as Meta;

export const Default: Story = ({ type, height, children }) => {
  return (
    <Tag type={type} height={height}>
      {children}
    </Tag>
  );
};

Default.args = {
  children: 'Tag Component',
};
