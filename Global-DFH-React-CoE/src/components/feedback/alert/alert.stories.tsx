import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'Components/Feeback/Alert',
  component: Alert,
} as Meta;

export const Default: Story = ({ type, children }) => {
  return <Alert type={type}>{children}</Alert>;
};

Default.args = {
  type: 'info',
  children: 'Alert Component',
};
