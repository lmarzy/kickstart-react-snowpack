import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Flex } from './flex';

export default {
  title: 'Components/Layout/Flex',
  component: Flex,
} as Meta;

const Template: Story = ({ direction, align, justify }) => (
  <Flex direction={direction} align={align} justify={justify}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Flex>
);

export const Default = Template.bind({});
