import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Field, Select } from '../';

export default {
  title: 'Components/Forms/Select',
  component: Select,
} as Meta;

export const Default: Story = () => {
  return (
    <Field id="selectId" label="Label">
      <Select
        id="id"
        options={[
          { id: '1', value: '1' },
          { id: '2', value: '2' },
        ]}
      />
    </Field>
  );
};

Default.args = {};
