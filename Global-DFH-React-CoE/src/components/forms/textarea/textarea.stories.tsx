import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, Textarea } from '../';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
} as Meta;

export const Default: Story = ({ placeholder }) => {
  return (
    <Field id="textareaId" label="Label">
      <Textarea id="id" placeholder={placeholder} />
    </Field>
  );
};

Default.args = {
  placeholder: 'Placeholder content',
};
