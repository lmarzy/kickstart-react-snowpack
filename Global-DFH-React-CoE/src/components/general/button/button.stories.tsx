import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './button';

export default {
  title: 'Components/General/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>my button</Button>;

export const Default = Template.bind({});
