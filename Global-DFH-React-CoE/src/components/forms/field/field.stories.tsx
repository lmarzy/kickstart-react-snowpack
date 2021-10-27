import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, FieldProps } from './field';

export default {
  title: 'Components/Forms/Field',
  component: Field,
} as Meta;

export const Default: Story<FieldProps> = (props) => {
  return (
    <>
      <Field as={props.as} label={props.label} id={props.id}>
        test
      </Field>
    </>
  );
};

Default.args = {
  id: 'id',
  label: 'Label',
};
