import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Hr } from './hr';

export default {
  title: 'Components/General/Hr',
  component: Hr,
} as Meta;

export const Default: Story = () => {
  return <Hr />;
};

Default.args = {};
