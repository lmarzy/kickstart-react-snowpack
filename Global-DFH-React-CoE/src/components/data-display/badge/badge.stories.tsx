import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge } from './badge';

export default {
  title: 'Components/DataDisplay/Badge',
  component: Badge,
} as Meta;

export const Default: Story = ({ type, children }) => {
  return <Badge type={type}>{children}</Badge>;
};

Default.args = {
  children: '1',
};
