import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './header';

export default {
  title: 'Components/Global/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header appName="App Name">Children</Header>;

export const Default = Template.bind({});
