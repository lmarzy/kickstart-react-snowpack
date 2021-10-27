import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { RadioGroup, RadioGroupProps } from './radio-group';

export default {
  title: 'Components/Forms/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Default: Story<RadioGroupProps> = (props) => <RadioGroup {...props} />;

Default.args = {
  name: 'name',
  options: [
    { id: 'id1', label: 'Label 1', value: 'value1' },
    { id: 'id2', label: 'Label 2', value: 'value2' },
    { id: 'id3', label: 'Label 3', value: 'value3' },
  ],
};
