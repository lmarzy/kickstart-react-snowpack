import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge } from '../../data-display/badge/badge';

import { Nav, NavProps } from './nav';

export default {
  title: 'Components/Global/Nav',
  component: Nav,
} as Meta;

export const Default: Story<NavProps> = (props) => {
  return <Nav {...props} />;
};

Default.args = {
  routes: [
    {
      path: '/',
      linkName: 'Nav link one',
      component: <Badge type="info">10</Badge>,
    },
    {
      path: '/two',
      linkName: 'Nav link two',
    },
    {
      path: '/three',
      linkName: 'Nav link three',
      component: <Badge type="warning">2</Badge>,
    },
    {
      path: '/four',
      linkName: 'Nav link four',
    },
  ],
};
