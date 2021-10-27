import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text } from './text';

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as Meta;

const Template: Story = ({ tag, size, color, fontWeight, mb, mt }) => (
  <Text tag={tag} size={size} color={color} fontWeight={fontWeight} mb={mb} mt={mt}>
    Lorem ipsum dolor sit amet.
  </Text>
);

export const Default = Template.bind({});
