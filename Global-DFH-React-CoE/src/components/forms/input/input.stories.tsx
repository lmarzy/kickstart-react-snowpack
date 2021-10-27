import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, Input } from '../';

export default {
  title: 'Components/Forms/Input',
  component: Input,
} as Meta;

export const Default: Story = ({ placeholder }) => {
  return (
    <Field id="inputId" label="Label">
      <Input id="inputId" placeholder={placeholder} onChange={() => console.log('yay')} />
    </Field>
  );
};

Default.args = {
  placeholder: 'Placeholder content',
};
