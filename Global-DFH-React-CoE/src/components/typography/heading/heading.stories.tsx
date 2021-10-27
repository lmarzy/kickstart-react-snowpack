import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Heading } from './heading';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story = ({ headingLevel, size, mb, mt }) => (
  <Heading headingLevel={headingLevel} size={size} mb={mb} mt={mt}>
    Heading
  </Heading>
);

export const Default = Template.bind({});
