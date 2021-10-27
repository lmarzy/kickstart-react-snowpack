import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loading } from './loading';

export default {
  title: 'Components/Feeback/Loading',
  component: Loading,
} as Meta;

export const Default: Story = () => {
  return <Loading />;
};

Default.args = {};
