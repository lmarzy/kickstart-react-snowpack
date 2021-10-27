import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UserMenu } from './user-menu';

export default {
  title: 'Components/Global/UserMenu',
  component: UserMenu,
} as Meta;

const Template: Story = () => (
  <UserMenu displayName="Jo Bloggs" onLogout={() => console.log('logged out')} />
);

export const Default = Template.bind({});
